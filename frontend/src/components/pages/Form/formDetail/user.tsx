const accessRoleList = ["USER"]
export function getUser(userId:string) {

    return [
        [
            [
                {
                    id: "userName",
                    title: "User Name",
                    type: "text",
                    placeholder: "User Name",
                    description: "User name required",
                    required: true,
                },
                {
                    id: "userRole",
                    title: "User Role",
                    type: "select",
                    placeholder: "Role",
                    description: "",
                    selectList: accessRoleList,
                }
            ],
            [

            ]
        ],
        [
            [

            ],
            [

            ]
        ],
        [
            [
                {
                    id: "userOldPassword",
                    title: "Password for update or delete",
                    type: "text",
                    placeholder: "Password",
                    description: "Password",
                },
            ],
            [
                {
                    id: "userNewPass",
                    title: "New Password",
                    type: "text",
                    placeholder: "New Password",
                    description: "New Password",

                },
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
                    /* id: "rating"*/
                },
                {
                    /*id: "web"*/
                }
            ]
        ]
    ]

}