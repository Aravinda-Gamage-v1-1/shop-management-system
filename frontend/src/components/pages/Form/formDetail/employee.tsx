const genderList = ["MALE", "FEMALE"]
const statusList = ["MARRIED", "UNMARRIED"]
const accessRoleList = ["ADMIN", "USER"]
export function getEmployee(empId:string) {

    return [
        [
            [
                {
                    id: "employeeId",
                    title: "Employee ID",
                    type: "text",
                    placeholder: "Auto generated",
                    description: "Start with E00-",
                    regex:/^E00-(0*[1-9]\d{0,2})$/
                },
                {
                    id: "employeeName",
                    title: "Employee Name",
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
                    title: "Employee Gender",
                    type: "select",
                    placeholder: "Gender",
                    description: "",
                    selectList: genderList,
                },
                {
                    id: "employeeStatus",
                    title: "Status",
                    type: "select",
                    placeholder: "Status",
                    description: "",
                    selectList: statusList,
                },
                {
                    id: "designation",
                    title: "Designation",
                    type: "text",
                    placeholder: "Designation",
                    description: "Designation",
                    regex:/^[A-Za-z ]{3,}$/
                },
            ]
        ],
        [
            [
                {
                    id: "employeeDob",
                    title: "Employee DOB",
                    type: "date",
                    placeholder: "Date",
                    description: "Date of birth",

                },
                {
                    id: "joinDate",
                    title: "Date of Join",
                    type: "date",
                    placeholder: "Date",
                    description: "Date of Join",

                }
            ],
            [

                {
                    id: "role",
                    title: "Access Role",
                    type: "select",
                    placeholder: "Role",
                    description: "",
                    selectList: accessRoleList,
                },
                {
                    id: "email",
                    title: "Email",
                    type: "email",
                    placeholder: "Email",
                    description: "Email required",
                    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

                },
                {
                    id: "contactNo",
                    title: "Contact number",
                    type: "number",
                    placeholder: "Contact",
                    description: "Mobile number",
                    regex:/^[^\p{L}]{10,}$/u,
                    required: true
                }
            ]
        ],
        [
            [
                {
                    id: "branch",
                    title: "Branch",
                    type: "text",
                    placeholder: "Branch",
                    description: "Branch",
                    regex:/^[A-Za-z ]{3,}$/
                },
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
                    id: "guardianName",
                    title: "Name of Guardian",
                    type: "text",
                    placeholder: "Guardian Name",
                    description: "Name required",
                    regex:/^[A-Za-z ]{5,}$/

                },
                {
                    id: "web"
                }
            ],
            [
                {
                    id: "emergencyContact",
                    title: "Contact number",
                    type: "number",
                    placeholder: "Emergency Contact",
                    description: "Mobile number",
                    regex:/^[^\p{L}]{10,}$/u

                }
            ]
        ]
    ]

}