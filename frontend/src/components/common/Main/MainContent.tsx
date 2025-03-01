import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "../../pages/LogIn/Login";
import {MainView} from "../../pages/MainView/MainView";
import {SignUp} from "../../pages/SignUp/SignUp";
import {NavBar} from "../NavBar/NavBar";
export function MainContent() {
    return (
        <section id="main-view" className="relative">
                <Routes>
                    <Route path=""
                           Component={MainView}>
                    </Route>
                    <Route path="/signin"
                           Component={Login}>
                    </Route>
                    <Route path="/signup"
                           Component={SignUp}>
                    </Route>
                </Routes>
        </section>
    );
}