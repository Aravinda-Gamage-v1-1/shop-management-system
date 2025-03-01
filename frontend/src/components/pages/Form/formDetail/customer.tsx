const genderList = ["MALE", "FEMALE"]

export function getCustomer(cusId: string) {

    return [
        [
            [
                {
                    id: "customerId",
                    title: "Customer ID",
                    type: "text",
                    placeholder: "Auto generated",
                    description: "Start with C00-",
                    regex:/^C00-(0*[1-9]\d{0,2})$/
                    /*isEdit:true*/
                },
                {
                    id: "customerName",
                    title: "Customer Name",
                    type: "text",
                    placeholder: "Name",
                    description: "Name required",
                    required: true,
                    regex:/^[A-Za-z ]{5,}$/
                }
            ],
            [
                {
                    id: "gender",
                    title: "Customer Gender",
                    type: "select",
                    placeholder: "Gender",
                    description: "",
                    selectList: genderList,
                },
                {
                    id: "customerDob",
                    title: "Customer DOB",
                    type: "date",
                    placeholder: "Date",
                    description: "Date of birth",

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
                {
                    id: "contactNo",
                    title: "Contact number",
                    type: "number",
                    placeholder: "Contact",
                    description: "Mobile number",
                    required: true,
                    regex:/^[^\p{L}]{10,}$/u
                }
            ],
            [
                {
                    id: "loyaltyDate",
                    title: "Loyalty Start Date",
                    type: "date",
                    placeholder: "Date",
                    description: "",
                },
                {
                    id: "totalPoints",
                    title: "Total Points",
                    type: "number",
                    placeholder: "",
                    description: "",
                },
                {
                    id: "lastPurchaseDate",
                    title: "Last Purchase Date",
                    type: "text",
                    placeholder: "",
                    description: "",
                    isEdit: true
                }
            ]
        ],
        [
            [
                {
                    id: "buildNo",
                    title: "Building No or Name",
                    type: "text",
                    placeholder: "Address",
                    description: "Building no or name",
                    regex:/^[A-Za-z0-9 ]{3,}$/
                },
                {
                    id: "lane",
                    title: "Lane",
                    type: "text",
                    placeholder: "Address",
                    description: "Lane",
                    regex:/^[A-Za-z0-9 ]{3,}$/
                }
            ],
            [
                {
                    id: "city",
                    title: "City",
                    type: "text",
                    placeholder: "Address",
                    description: "Main city",
                    regex:/^[A-Za-z0-9 ]{3,}$/
                },
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
                    id: "rating"
                },
                {
                    id: "web"
                }
            ]
        ]
    ]

}