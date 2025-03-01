const categoryList = ["INTERNATIONAL", "LOCAL"]
export function getSupplier(supId:string) {

    return [
        [
            [
                {
                    id: "supplierCode",
                    title: "Supplier Code",
                    type: "text",
                    placeholder: "Auto generated",
                    description: "Start with S00-",
                    required: true,
                    regex:/^S00-(0*[1-9]\d{0,2})$/
                    /*isEdit:true*/
                },
                {
                    id: "supplierName",
                    title: "Supplier Name",
                    type: "text",
                    placeholder: "Name",
                    description: "Name required",
                    required: true,
                    regex:/^S00-(0*[1-9]\d{0,2})$/
                }
            ],
            [
                {
                    id: "category",
                    title: "Category",
                    type: "select",
                    placeholder: "Category",
                    description: "",
                    selectList: categoryList,
                },
                {
                    id: "buildNo",
                    title: "Building No or Name",
                    type: "text",
                    placeholder: "Address",
                    description: "Building no or name",
                    regex:/^[A-Za-z0-9 ]{3,}$/
                }
            ]
        ],
        [
            [
                {
                    id: "email",
                    title: "Email",
                    type: "email",
                    placeholder: "Email",
                    description: "Email required",
                    regex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/

                },

            ],
            [
                {
                    id: "mobileNo",
                    title: "Mobile No",
                    type: "number",
                    placeholder: "Mobile No",
                    description: "Mobile number",
                    required: true,
                    regex:/^[^\p{L}]{10,}$/u
                },
                {
                    id: "landNo",
                    title: "Landline No",
                    type: "number",
                    placeholder: "Landline No",
                    description: "Landline number",
                    required: true,
                    regex:/^[A-Za-z0-9 ]{3,}$/
                }

            ]
        ],
        [
            [
                {
                    id: "lane",
                    title: "Lane",
                    type: "text",
                    placeholder: "Address",
                    description: "Lane",
                    regex:/^[A-Za-z0-9 ]{3,}$/
                },
                {
                    id: "city",
                    title: "City",
                    type: "text",
                    placeholder: "Address",
                    description: "Main city",
                    regex:/^[A-Za-z0-9 ]{3,}$/
                }
            ],
            [

                {
                    id: "state",
                    title: "State",
                    type: "text",
                    placeholder: "Address",
                    description: "Main state",
                    regex:/^[A-Za-z0-9 ]{3,}$/
                },
                {
                    id: "postalCode",
                    title: "Postal Code",
                    type: "number",
                    placeholder: "Address",
                    description: "Postal code",
                    regex:/^[A-Za-z0-9 ]{3,}$/
                },
                {
                    id: "supCountry",
                    title: "Origin Country",
                    type: "text",
                    placeholder: "Address",
                    description: "Origin Country",
                    regex:/^[A-Za-z ]{3,}$/
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
                    id: "supImg"
                },
                {
                    /*id: "web"*/
                }
            ]
        ]
    ]

}