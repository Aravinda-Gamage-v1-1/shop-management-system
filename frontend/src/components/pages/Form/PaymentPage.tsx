import {InputItem} from "../../input/InputItem";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import card from "../../../images/card.gif";
import cashImg from "../../../images/cash.gif";
import deleteIcon from "../../../images/delete3.gif";
import {Label} from "../../../ui/label";
import Button from "@mui/material/Button";
import {saveData, searchAllData, searchData} from "./fetchData";
import {getPaymentTable} from "./tableDetails/payment";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Swal from "sweetalert2";


interface Props {
    formData: any
}

export function PaymentPage({formData}: Props) {
    const {register, handleSubmit,getValues , reset, watch, formState: {errors}, setValue} = useForm()
    const [resetForm, setResetForm] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const cusUrl = "http://localhost:4000/api/v1/customer";
    const itmUrl = "http://localhost:4000/api/v1/inventory";
    const salesUrl = "http://localhost:4000/api/v1/sales";
    const [previewData, setPreviewData] = useState<any>([]);
    const [payMethod, setPayMethod] = useState("")

    const headers = getPaymentTable();

    const fetchData = async (url: any, inputValue: any) => {
        if (inputValue) {
            const result = await searchData(url, "/search/", inputValue)
            if (result) {
                return result;
            }
        }
    }
    const changeCustomerAndItem = async (inputValue: any, id: any) => {
        if (id === "cusId") {
            const data = await fetchData(cusUrl, inputValue)
            if(data !== undefined) {
                setValue('cusName', data.customerName);
            }
        }
        if (id === "itemCode") {
            const data = await fetchData(itmUrl, inputValue)
            if(data !== undefined){
                setValue('salePrice', data.salePrice);
                setValue('itemDesc', data.itemDesc);
                setValue('qty', data.qty);
            }

        }

    }
    const addItems = ()=>{
        let id = getValues('itemCode');
        let name = getValues('itemDesc');
        let size = getValues('size');
        let price = getValues('salePrice');
        let qty = getValues('itmQTY');
        let total = parseFloat(price) * parseFloat(qty);

        if (id && name && size && price && qty) {
            const itemIndex = previewData.findIndex((item: any) => item.itemCode === id && item.size == size);

            if (itemIndex !== -1) {
                setPreviewData((prevData: any) => {
                    const updatedData = [...prevData];
                    let total1 = updatedData[itemIndex].total;
                    let number2 = parseFloat(total.toFixed(2))+total1;
                    updatedData[itemIndex] = {
                        ...updatedData[itemIndex],
                        qty: parseInt(updatedData[itemIndex].qty) + parseInt(qty),
                        total: parseFloat(number2.toFixed(2))
                    };
                    let tot = parseFloat(totalPrice.toFixed(2));
                    let number = parseFloat(total.toFixed(2))+tot;
                    setTotalPrice(parseFloat(number.toFixed(2)))
                    return updatedData;
                });
            } else {
                const data = {
                    itemCode: id, itemDesc: name,
                    size: size, unitPrice: price,
                    qty: qty, total: total
                };
                setPreviewData((prevData: any) => [...prevData, data]);
                let tot = parseFloat(totalPrice.toFixed(2));
                let number = parseFloat(total.toFixed(2))+tot;
                setTotalPrice(parseFloat(number.toFixed(2)))
            }
        }
    }

    function clear() {
        setPreviewData([]);
        setResetForm(true);
        setTotalPrice(0)
    }

    function validateCash(cash:any, subtotal:any){
        if (!isNaN(subtotal) && !isNaN(cash)) {
            if (cash >= subtotal) {
                return true;
            }
        }
        return false;
    }
    function purchase() {

        let ordId = getValues('orderNo');
        let cusId = getValues('cusId');
        let cusName = getValues('cusName');

        if(payMethod !== ""){
            Swal.fire({
                title: "Select Payment Method",
                icon: "error"
            });
        }
        if (cusId && cusName && ordId ) {

            if(previewData.length === 0){
                Swal.fire({
                    title: "Add Items",
                    icon: "error"
                });
                return
            }
            let subtotal = totalPrice
            let cash = getValues('cash');

            if(validateCash(cash,subtotal)){
                let data = {
                    orderNo:ordId,
                    cusId: cusId,
                    cusName: cusName,
                    totalPoints: 10,
                    paymentMethod:payMethod,
                    saleDetails: []
                }
                data.saleDetails = previewData.map((value:any)=>{
                    return {
                        itemCode: value.itemCode, itemDesc: value.itemDesc,
                        size: value.size, salePrice: value.unitPrice,
                        itmQTY: value.qty, itemTotal: value.total
                    };
                })
                console.log(data)
                saveData(salesUrl,data,()=>{
                    setResetForm(true);
                    Swal.fire({
                        title: "complete",
                        icon: "success"
                    });
                });
            }



        }
        else{
            alert("Fill data")
        }
    }

    const removeRow = (indexToRemove: number) => {
        const updatedPreviewData = [...previewData];
        const remove = updatedPreviewData[indexToRemove];
        updatedPreviewData.splice(indexToRemove, 1);
        setPreviewData(updatedPreviewData);

        let newPrice = totalPrice - remove.total;

        setTotalPrice(parseFloat(newPrice.toFixed(2)));
    };

    return (
        <>
            <div className="flex justify-center align-items-center h-full w-full">

                <div className="w-1/2 h-2/3 ">
                    <div className="ml-8">
                        {formData.map((section: any, index: any) => (
                            <div key={index}
                                 className={`flex justify-between w-full px-3 h-[13vh]`}>
                                {section.map((data: any) => (
                                    <div key={data.id}
                                         className={`z-50 ${(section.length === 1 || section.length === 1) ? 'w-[18vw]' : 'w-[13.2vw]'}`}>
                                        <InputItem
                                            key={data.id}
                                            id={data.id}
                                            title={data.title}
                                            placeholder={data.placeholder}
                                            type={data.type}
                                            description={data.description}
                                            selectList={data.selectList}
                                            register={register}
                                            watch={watch}
                                            value={data.value}
                                            isEdit={data.isEdit}
                                            setValue={setValue}
                                            onChange={data.onChange}
                                            errors={errors}
                                            isRequired={data.required}
                                            resetForm={resetForm}
                                            setResetForm={setResetForm}
                                            onEnter={changeCustomerAndItem}
                                            regex={data.regex}

                                        />
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>
                </div>
                <div className="w-1/2 h-2/3">
                    <div className="ml-12">
                        <div className={"flex w-full px-3 h-[26vh]"}>
                            <div className={"flex w-1/2 h-full"}>
                                <div className="flex flex-col justify-center items-center w-1/2 h-full">
                                    <Label className={`mb-4 font-semibold ${(payMethod == "Cash")? "font-extrabold text-red-800":""}`}>Cash Payment</Label>
                                    <img onClick={()=>{ setPayMethod("Cash") }} className={`w-[5.5vw] ${(payMethod == "Cash")? "shadow-lg shadow-neutral-500":""}`} src={cashImg}/>
                                </div>
                                <div className="flex flex-col justify-center items-center w-1/2 h-full">
                                    <Label className={`mb-4 font-semibold ${(payMethod == "Card")? "font-extrabold text-red-800":""}`}>Card Payment</Label>
                                    <img onClick={()=>{ setPayMethod("Card") }} className={`w-[5.5vw] ${(payMethod == "Card")? "shadow-lg shadow-neutral-500":""}`} src={card}/>
                                </div>
                            </div>
                            <div className={"flex flex-col w-1/2 h-full "}>
                                <div className={"flex flex-col justify-center w-full h-1/2 ml-5"}>
                                    <span className="text-[#3d98ef] text-sm font-semibold">Total : </span>
                                    <div><span className="text-[#3d98ef] text-3xl">{totalPrice}</span> Rs/=</div>
                                </div>
                                <div className={"flex flex-col justify-center w-full h-1/2 ml-5"}>
                                    <span className="text-[#ef5350] text-sm font-semibold">SubTotal : </span>
                                    <div><span className="text-[#ef5350] text-3xl">{subTotal}</span> Rs/=</div>
                                </div>
                            </div>
                        </div>
                        <div className={"flex-row w-full px-3 h-[26vh] "}>
                            <div className={"flex items-center  w-full h-2/5 ml-8"}>
                                <div className={"flex items-center justify-center flex-col mr-6"}>
                                    <InputItem
                                        key={"cash"}
                                        id={"cash"}
                                        title={"Cash"}
                                        type={"text"}
                                        register={register}
                                        watch={watch}
                                        setValue={setValue}
                                        errors={errors}
                                        resetForm={resetForm}
                                        setResetForm={setResetForm}

                                    />
                                </div>
                                <div className={"flex flex-col"}>
                                    <InputItem
                                        key={"discount"}
                                        id={"discount"}
                                        title={"discount"}
                                        type={"text"}
                                        register={register}
                                        watch={watch}
                                        setValue={setValue}
                                        errors={errors}
                                        resetForm={resetForm}
                                        setResetForm={setResetForm}

                                    />
                                </div>
                            </div>
                            <div className={"flex items-center w-full h-2/5 ml-8"}>
                                <div className={"flex flex-col"}>
                                    <InputItem
                                        key={"balance"}
                                        id={"balance"}
                                        title={"balance"}
                                        type={"text"}
                                        register={register}
                                        watch={watch}
                                        setValue={setValue}
                                        errors={errors}
                                        resetForm={resetForm}
                                        setResetForm={setResetForm}

                                    />
                                </div>
                                <Button sx={{marginLeft: 4, marginTop: 5}} variant="contained" color="success"
                                        size="small" type="button"
                                        onClick={() => { purchase();
                                        }}>Purchase</Button>
                            </div>
                            <div className={"flex justify-start items-center w-full h-1/5 mt-4"}>

                                <Button sx={{marginLeft: 4}} variant="contained" color="primary"
                                        size="small" type="button"
                                        onClick={() => { addItems()
                                        }}>Add Item</Button>
                                <Button sx={{marginLeft: 4}} variant="contained" color="warning"
                                        size="small" type="button"
                                        onClick={() => { clear();
                                        }}>Clear</Button>
                                <Button sx={{marginLeft: 4}} variant="contained" color="success"
                                        size="small" type="button"
                                        onClick={() => {
                                        }}>Update</Button>
                                <Button sx={{marginLeft: 4}} variant="contained" color="error"
                                        size="small" type="button"
                                        onClick={() => {
                                        }}>Delete</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-[68vw] h-[10vh] absolute bottom-[14vh] m-auto"}>
                    <TableContainer
                        component={Paper}
                        className=""
                        style={{
                            height: '21.2vh',
                            width: '68vw',
                            overflowY: 'auto',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        <Table size="small" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {headers.map((header, index) => (
                                        <TableCell
                                            key={index}
                                            sx={{
                                                backgroundColor: '#CFD8DC',
                                                color: '#37474F',
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '1vw'
                                            }}
                                        >
                                            {header.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    previewData.map((row:any, rowIndex:any) => (
                                        <TableRow
                                            key={rowIndex}
                                            sx={{ '&:hover': { backgroundColor: '#CFD8DC' } }}
                                        >
                                            {headers.map((header:any) => (
                                                <TableCell
                                                    onClick={header.id === "remove" ? () => removeRow(rowIndex) : undefined}
                                                    key={header.id}
                                                    sx={{
                                                        fontSize: '0.7vw',
                                                        color: 'black',
                                                        textAlign: 'center',
                                                        height: '2.5vw',
                                                        padding: '0.5vw',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                >

                                                    {(header.id=="remove")?<div className={"flex justify-center items-center"}><img className={"w-[1.2vw]"} src={deleteIcon}/></div>:row[header.id]}

                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
}