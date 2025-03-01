const statusList = ["Available", "Not Available","Low"]

export function getInventory() {

    return [
        [
            [
                {
                    id: "itemCode",
                    title: "Item Code",
                    type: "text",
                    placeholder: "Item Code",
                    /*description: "Item code required",
                    regex:/^[A-Za-z0-9 ]{3,}$/*/
                },
                {
                    id: "itemDesc",
                    title: "Item Description",
                    type: "text",
                    placeholder: "Description",
                    description: "",
                    regex:/^[A-Za-z ]{3,}$/
                }
            ],
            [

                {
                    id: "category",
                    title: "Item Category",
                    type: "text",
                    placeholder: "Category",
                    description: "",
                    /*isEdit:true*/
                },
                {
                    id: "supplierCode",
                    title: "Supplier ID",
                    type: "text",
                    placeholder: "Supplier ID",
                   /* description: "Supplier ID",
                    regex:/^S00-(0*[1-9]\d{0,2})$/*/
                },
                {
                    id: "supplierName",
                    title: "Supplier Name",
                    type: "text",
                    placeholder: "Supplier Name",
                    /*description: "Supplier Name",
                    regex:/^[A-Za-z ]{3,}$/*/
                },

            ]
        ],
        [
            [
                {
                    id: "profitMargin",
                    title: "Profit Margin",
                    type: "text",
                    placeholder: "Profit Margin",
                    description: "",

                },
                {
                    id: "status",
                    title: "Status",
                    type: "select",
                    placeholder: "Status",
                    description: "",
                    selectList: statusList,
                },
            ],
            [

            ]
        ],
        [
            [
                {
                    id: "buyPrice",
                    title: "Buy Price",
                    type: "number",
                    placeholder: "Buy Price",
                    description: "",
                    regex:/^[1-9]\d*(\.\d+)?$/
                },
                {
                    id: "salePrice",
                    title: "Sale Price",
                    type: "number",
                    placeholder: "Sale Price",
                    description: "",
                    regex:/^[1-9]\d*(\.\d+)?$/
                },
                {
                    id: "expectedProfit",
                    title: "Expected Profit",
                    type: "text",
                    placeholder: "Expected Profit",
                    description: "",
                },

            ],
            [
                {
                    id: "sm",
                    title: "Small",
                    type: "number",
                    placeholder: "Qty",
                    description: "",
                },
                {
                    id: "md",
                    title: "Medium",
                    type: "number",
                    placeholder: "Qty",
                    description: "",
                },
                {
                    id: "lg",
                    title: "Large",
                    type: "text",
                    placeholder: "Qty",
                    description: "",
                }
            ],
            [
                {
                    id: "xl",
                    title: "XL",
                    type: "number",
                    placeholder: "Qty",
                    description: "",
                },
                {
                    id: "xxl",
                    title: "XXL",
                    type: "number",
                    placeholder: "Qty",
                    description: "",
                }
            ],
            [
                {
                    id: "button",
                }
            ]
        ],
        [
            [
                {
                    id: "file"
                },
                {
                    id: "web"
                }
            ]
        ]
    ]

}