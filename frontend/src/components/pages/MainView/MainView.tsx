import React from "react";
import cloth from "../../../images/companyLogo.png";
import {LogButton} from "../../common/Button/LogButton";
import {NavBar} from "../../common/NavBar/NavBar";

export function MainView() {
    return (

        <section className="w-full ">
            <NavBar signIn={true} signUp={true} date={false} logOut={false}/>
            <div className="background relative">
                <div id="particles-js"></div>
            </div>

            <div className="relative">
                <img
                    src={cloth}
                    className="w-1/2 absolute top-[12vh] right-[50vw]"
                    alt="icon"
                />
                <h1 className="absolute top-[21vh] right-[5vw] font-fira-sans font-bold text-[70px] text-[#363744]">
                    Be Style
                </h1>
                <h1 className="absolute top-[30vh] right-[5vw] font-fira-sans font-extrabold text-[70px] text-[#467272]">
                    Exclusive access
                </h1>
                <p className="absolute w-[32vw] top-[45vh] right-[5.3vw] font-fira-sans font-bold text-[22px] text-[#9FA0A0] text-right">
                    A New Revolution.A New Perspective,the best look anytime anywhere
                </p>
                <LogButton id="btn-log" content="Sign In" className="absolute top-[53vh] right-[5.5vw] btn" navigate="/signin" />
            </div>
        </section>
    );
}