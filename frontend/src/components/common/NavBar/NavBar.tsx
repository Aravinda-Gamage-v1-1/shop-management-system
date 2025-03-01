import {LogButton} from "../Button/LogButton";
import React from "react";

interface activeProps{
    signIn: boolean,
    signUp: boolean,
    date: boolean,
    logOut: boolean,
}
export function NavBar({signIn, signUp, date, logOut}: activeProps) {
    if (logOut === true){

    }
    return (
        <header id="header" style={{ boxShadow: '0px 1px 10px #C2C3C2' }}>
            <nav className="flex items-center h-[60px]">
                <div className="ml-auto mr-4">
                    {signIn && <LogButton id="signIn" content="Sign In" className="" navigate="/signin"/>}
                    {signUp && <LogButton id="signUp" content="Sign Up" className="" navigate="/signup"/>}
                    {logOut && <LogButton id="userLogOut" content="Log Out" className="" navigate="/"/>}
                </div>
            </nav>
        </header>
    );

}