import React from "react";
import image from "../../../images/shoe-dark.gif"

import {SignInPage} from "./SignInPage";
import {NavBar} from "../../common/NavBar/NavBar";

export function Login() {
    return (
        <section id="log-in-page">
            <SignInPage imageActive={true} id={"log-in-container"} className={"w-[32vw] h-[35vw] bg-white absolute top-[6vh] left-0 right-1/2 m-auto"}/>
        </section>
    );
}