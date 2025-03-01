import {SideBar} from "../../common/NavBar/SideBar";
import React, {useState} from "react";
import {NavBar} from "../../common/NavBar/NavBar";
import {MainForm} from "../Form/MainForm";

export function AdminPage() {
    const [currentPage, setCurrentPage] = useState<string>("dashboard");
    return (
        <>
            <NavBar signIn={false} signUp={false} date={false} logOut={true}/>
            <SideBar setCurrentPage={setCurrentPage}/>
            <MainForm path={currentPage}/>
        </>
    );
}