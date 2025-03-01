import {LogButton} from "../../common/Button/LogButton";
import {TextField} from "../../input/TextField";
import React, {useState} from "react";
import {AdminPage} from "../Admin/AdminPage";
import cloth from "../../../images/companyLogo.png";
import user from "../../../images/users.gif";
import {NavBar} from "../../common/NavBar/NavBar";
import {searchData, searchUser, signIn} from "../Form/fetchData";
import Swal from 'sweetalert2';

interface SignInPageProps {
    id: string,
    className: string
    imageActive: boolean;
}

export function SignInPage({id, className, imageActive}: SignInPageProps) {

    const [role, setRole] = useState("admin");
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let url = "http://localhost:4000/api/v1/user"
    const NAME_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;

    const handleChange = (event: { target: { name: any, value: any }; }) => {
        const newValue = event.target.value;
        const name = event.target.name;
        if (name == "username") {
            setUsername(newValue);
        }
        if (name == "password") {
            setPassword(newValue);
        }
    };
    function showAlert(name: string) {
        let timerInterval: number;

        Swal.fire({
            title: `Welcome ${name} !`,
            html: "",
            timer: 3000,
            width: 600,
            padding: "3em",
            color: "rgba(233,197,74,0.4)",
            background: `url(${user}) no-repeat left 1.2vw`,
            backdrop: `
            rgba(233,197,74,0.4)
            url("")
            left top
            no-repeat
        `,
            didOpen: () => {
                (Swal.getPopup()?.querySelector('.swal2-title') as HTMLElement).style.color = '#4D5F71';
                Swal.showLoading();
                timerInterval = window.setInterval(() => {
                    // You can put some logic here if needed
                }, 1000);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("closed timer");
            }
        });
    }

    const handleNavigationClick = () => {
        /*setIsSignedIn(true);*/
        if (!NAME_REGEX.test(username) && !PASS_REGEX.test(password)) {
            Swal.fire({
                title: "Invalid Username & Password",
                icon: "question"
            });
            return
        } else if (!NAME_REGEX.test(username)) {
            Swal.fire({
                title: "Invalid Username",
                icon: "question"
            });
            return
        } else if (!PASS_REGEX.test(password)) {
            Swal.fire({
                title: "Invalid Password",
                icon: "question"
            });
            return
        }
        signIn(url+"/signin", {username: username, password: password}).then((value) => {
            if (value) {
                searchUser(url, "/search/", username).then((value) => {
                    if (value) {
                        localStorage.setItem("role", value.role);

                        if (value.role === 'Admin') {
                            setIsSignedIn(true);
                        } else {
                            Swal.fire({
                                title: "You do not have permission to view this page.",
                                icon: "error"
                            });
                        }
                    }
                })
                showAlert("Admin");
            }
        }).catch((error) => {
            alert("Invalid Credential");
        })
    };
    if (isSignedIn) {

        return <AdminPage/>
    }

    return (
        <>
            <NavBar signIn={true} signUp={true} date={false} logOut={false} />
            <section className="relative flex items-center justify-center min-h-screen bg-gray-100">
                <img src={cloth} className="absolute w-1/2 top-20 right-10 opacity-50 rounded-lg " alt="Background Cloth" />
                <div id={id} className={`bg-white p-10 shadow-xl rounded-lg w-[30rem] ${className}`}>
                    <LogButton id="logInBackToHome" content="Back to Homepage" navigate="/"
                               className="mt-3 text-sm font-medium text-gray-600 hover:text-[#E9C54A] transition duration-300" />

                    <h1 className="mt-4 text-4xl font-extrabold text-gray-800">Sign In</h1>
                    <p className="text-orange-500 font-semibold text-sm">Access the Portal</p>

                    <div className="mt-6">
                        <label className="block text-gray-700 font-semibold text-lg">Username</label>
                        <TextField name="username" value={username} handleChange={handleChange} id="log-in-Username"
                                   type="text" placeholder={""} className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400" />
                        <small className="text-red-500" id="log-in-UsernameError"></small>
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700 font-semibold text-lg">Password</label>
                        <TextField name="password" value={password} handleChange={handleChange} id="log-in-Password"
                                   type="password" placeholder={""} className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400" />
                        <small className="text-red-500" id="log-in-PasswordError"></small>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-orange-500 cursor-pointer hover:underline">Forgot Password?</p>

                    <button id="btnSignIn" type="button" onClick={handleNavigationClick}
                            className="w-full mt-6 py-3 text-white rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 shadow-md">
                        Sign In
                    </button>

                    <p className="mt-4 text-center text-gray-600 text-sm">
                        Haven't Account? <a href="/signUp" className="text-orange-500 hover:underline">Sign Up</a>
                    </p>
                </div>
            </section>
        </>
    );
    // return (
    //     <>
    //         <NavBar signIn={true} signUp={true} date={false} logOut={false}/>
    //         <section className={"relative "}>
    //             <img src={cloth} className={"absolute w-[47.5%] top-[12vh] right-[5.5vw]"}/>
    //             <div id={id}
    //                  className={className}>
    //                 <LogButton id={"logInBackToHome"} content={"Back to Homepage"} navigate={"/"}
    //                            className={"mt-3 ms-5 p-0.5 font-medium text-[10px] hover:border-[#E9C54A] hover:border-[0.148px] hover: rounded"}/>
    //                 <h1 className="mt-2 ms-10 text-[#363744]" style={{fontSize: '40px', fontWeight: '900'}}>Sign In</h1>
    //                 <h1 className="ms-10 text-[#FFA633] font-bold text-[11px]">Sign In to Access the Portal</h1>
    //
    //                 <h1 id="txtLogID" className="hidden text-yellow-600 font-medium text-base">aaaa</h1>
    //
    //                 <div className="col-md-6 ms-8 mt-6">
    //                     <label className="text-black font-bold  text-[15px] ml-1.5">Username</label>
    //                     <TextField name={"username"} value={username} handleChange={handleChange} id="log-in-Username"
    //                                type="text" placeholder={""} className="w-[26vw] ml-1.5 mt-1"/>
    //                     <p className="mt-1"><small className="text-red-500" id="log-in-UsernameError"></small></p>
    //                 </div>
    //
    //                 <div className="col-md-6 ms-8 mt-4">
    //                     <label className="font-bold text-black text-[15px] ml-1.5">Password</label>
    //                     <TextField name={"password"} value={password} handleChange={handleChange} id="log-in-Username"
    //                                type="password" placeholder={""} className="w-[26vw] ml-1.5 mt-1"/>
    //                     <p className="mt-1"><small className="text-red-500" id="log-in-PasswordError"></small></p>
    //                 </div>
    //
    //                 <h1 className="mt-2 ms-10 font-bold text-[#FFA633] text-[12px]">Forgot Password ?</h1>
    //                 <button id="btnSignIn" type="button" onClick={handleNavigationClick}
    //                         className="ms-10 mt-14 text-white rounded h-9 w-[26vw] bg-[rgba(59,59,59,0.9)] ml-[3.09vw]">Sign
    //                     In
    //                 </button>
    //
    //                 <h1 className="mt-4 text-yellow-600 font-medium text-sm text-center ml-2">
    //                     <a href="/signUp" className="text-black text-[12px] no-underline">Haven't Account ?</a>
    //                 </h1>
    //             </div>
    //         </section>
    //     </>
    // );
}