import React, {useState} from "react";
import walk from "../../../images/walk.gif";
import chart from "../../../images/chart.png";
import flashsale from "../../../images/flashSale.gif";
import customers from "../../../images/customers.gif";
import {Label} from "../../../ui/label";

export const Dashboard = () => {
    let [image, setImage] = useState<string | undefined>(walk);

    return (
        <>
            <div className={"flex flex-row w-full h-full "}>
                <div className={"flex flex-col w-1/3 h-full "}>
                    {/*<div className={"flex flex-col justify-center items-center w-full h-2/5 "}>*/}
                    {/*    <Label className="text-gray-700 font-bold text-[1.8vw] w-[20vw] text-center absolute top-3">Most Sale Item</Label>*/}
                    {/*    <img className={"h-[11.5vw] mt-12"} src={image} alt="image"/>*/}
                    {/*</div>*/}
                    <div className={"flex flex-col justify-evenly items-center w-full h-3/5 py-6"}>

                        <div className="flex items-center w-5/6 h-1/6 bg-[#E9E9E9] rounded-lg">
                            <Label className="text-gray-700 font-semibold text-[1.4vw] w-1/2 text-center ml-2">Item
                                Code </Label>
                            <Label className="text-gray-700 font-bold text-[1.6vw] w-1/2 text-center">I001</Label>
                        </div>
                        <div className="flex items-center w-5/6 h-1/6 bg-[#E9E9E9] rounded-lg">
                            <Label className="text-gray-700 font-semibold text-[1.4vw] w-1/2 text-center ml-2">Description</Label>
                            <Label className="text-gray-700 font-bold text-[1.6vw] w-1/2 text-center">Nike</Label>
                        </div>
                        <div className="flex items-center w-5/6 h-1/6 bg-[#E9E9E9] rounded-lg">
                            <Label className="text-gray-700 font-semibold text-[1.4vw] w-1/2 text-center ml-2">ISale Price </Label>
                            <Label className="text-gray-700 font-bold text-[1.6vw] w-1/2 text-center">1000</Label>
                        </div>
                        <div className="flex items-center w-5/6 h-1/6 bg-[#E9E9E9] rounded-lg">
                            <Label className="text-gray-700 font-semibold text-[1.4vw] w-1/2 text-center ml-2">Sale Qty</Label>
                            <Label className="text-gray-700 font-bold text-[1.6vw] w-1/2 text-center">10</Label>
                        </div>
                    </div>
                </div>
                {/*<div className={"w-2/3 h-full "}>*/}
                {/*    <div className="flex items-center h-1/3 w-full">*/}
                {/*        <div className="flex w-[19vw] h-5/6 mr-6 rounded-lg bg-[#E9E9E9]">*/}
                {/*            <div className="flex flex-col justify-center items-start w-3/5 h-full">*/}
                {/*                <Label className="text-gray-600 font-bold text-[1.6vw] w-full text-center pr-2">Total*/}
                {/*                    Sales</Label>*/}
                {/*                <Label*/}
                {/*                    className="text-gray-700 font-bold text-[2.5vw] w-full text-center pr-2">10000</Label>*/}
                {/*                <Label className="text-gray-500 font-bold text-[1vw] w-full text-center pr-2 mb-2">since*/}
                {/*                    last week</Label>*/}
                {/*            </div>*/}
                {/*            <div className="flex justify-center items-center w-2/5 h-full">*/}
                {/*                <img className="h-3/5" src={customers} alt="image"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="flex w-[19vw] h-5/6 mr-6 rounded-lg bg-[#E9E9E9]">*/}
                {/*            <div className="flex flex-col justify-center items-start w-3/5 h-full">*/}
                {/*                <Label className="text-gray-600 font-bold text-[1.6vw] w-full text-center pr-2">Total*/}
                {/*                    Profit</Label>*/}
                {/*                <Label*/}
                {/*                    className="text-gray-700 font-bold text-[2.5vw] w-full text-center pr-2">5000</Label>*/}
                {/*                <Label className="text-gray-500 font-bold text-[1vw] w-full text-center pr-2 mb-2">since*/}
                {/*                    last week</Label>*/}
                {/*            </div>*/}
                {/*            <div className="flex justify-center items-center w-2/5 h-full">*/}
                {/*                <img className="h-3/5" src={customers} alt="image"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="flex w-[19vw] h-5/6 mr-6 rounded-lg bg-[#E9E9E9]">*/}
                {/*            <div className="flex flex-col justify-center items-start w-3/5 h-full">*/}
                {/*                <Label className="text-gray-600 font-bold text-[1.6vw] w-full text-center pr-2">Total*/}
                {/*                    Orders</Label>*/}
                {/*                <Label*/}
                {/*                    className="text-gray-700 font-bold text-[2.5vw] w-full text-center pr-2">1</Label>*/}
                {/*                <Label className="text-gray-500 font-bold text-[1vw] w-full text-center pr-2 mb-2">since*/}
                {/*                    last week</Label>*/}
                {/*            </div>*/}
                {/*            <div className="flex justify-center items-center w-2/5 h-full">*/}
                {/*                <img className="h-3/5" src={customers} alt="image"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="flex items-center h-1/3 w-full ">*/}
                {/*        <div className="flex w-[35vw] h-5/6 mr-6 rounded-lg">*/}
                {/*            <img className={"h-full"} src={chart} alt="image"/>*/}
                {/*        </div>*/}

                {/*        <div className="flex w-[35vw] h-5/6 mr-6 rounded-lg bg-[#E9E9E9]">*/}
                {/*                <div className="flex flex-col justify-center items-start w-3/5 h-full">*/}
                {/*                    <Label className="text-gray-600 font-bold text-[1.6vw] w-full text-center pr-2">Total*/}
                {/*                        Customers</Label>*/}
                {/*                    <Label*/}
                {/*                        className="text-gray-700 font-bold text-[2.5vw] w-full text-center pr-2 mb-3">10</Label>*/}
                {/*                </div>*/}
                {/*            <div className="flex justify-center items-center w-2/5 h-full">*/}
                {/*                <img className="h-2/3" src={customers} alt="image"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div className="flex items-center h-1/3 w-full ">*/}
                {/*        <div className="flex w-[35vw] h-5/6 mr-6 rounded-lg bg-[#E9E9E9]">*/}
                {/*            <div className="flex justify-center items-center w-2/5 h-full pl-4">*/}
                {/*                <img className="h-2/3" src={customers} alt="image"/>*/}
                {/*            </div>*/}
                {/*            <div className="flex flex-col justify-center items-start w-3/5 h-full">*/}
                {/*                <Label className="text-gray-600 font-bold text-[1.6vw] w-full text-center pr-2">Total*/}
                {/*                    Items</Label>*/}
                {/*                <Label*/}
                {/*                    className="text-gray-700 font-bold text-[2.5vw] w-full text-center pr-2 mb-3">10</Label>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flex justify-center items-center w-[35vw] h-5/6 mr-6 rounded-lg">*/}
                {/*            <img className="h-5/6" src={flashsale} alt="image"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};
