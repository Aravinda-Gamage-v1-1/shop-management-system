const sizes = ["S","M","L","XL","XXL"]
export function getPayment() {

    return [

        [
            {
                id: "orderNo",
                title: "Order ID",
                type: "text",
                placeholder: "",
                description: "Start with OID-",
                regex:/^OID-(0*[1-9]\d{0,2})$/
            },
            {
                id: "purchaseDate",
                title: "Order Date",
                type: "text",
                placeholder: "",
                isEdit: true
            }

        ],
        [
            {
                id: "itemCode",
                title: "Item Code",
                type: "text",
                placeholder: "",

            },
            {
                id: "itemDesc",
                title: "Item Description",
                type: "text",
                placeholder: "",

            },
            {
                id: "salePrice",
                title: "Unit Price",
                type: "text",
                placeholder: "",
                isEdit: true

            }
        ],
        [
            {
                id: "size",
                title: "Size",
                type: "select",
                placeholder: "",
                description: "",
                selectList: sizes,
            },
            {
                id: "qty",
                title: "Qty on hand",
                type: "number",
                placeholder: "",
                isEdit: true

            },
            {
                id: "itmQTY",
                title: "Order Qty",
                type: "number",
                placeholder: "",

            }
        ],
        [

            {
                id: "cusId",
                title: "customer ID",
                type: "text",
                placeholder: "",

            },
            {
                id: "cusName",
                title: "customer Name",
                type: "text",
                placeholder: "",
                isEdit: true

            },
            {
                id: "totalPoints",
                title: "Points",
                type: "text",
                placeholder: "",
                isEdit: true

            }
        ]

    ]

}