import React, {useState} from "react";
import arrow from "../../../images/arrow.gif";
import dashboard from "../../../images/dashboard.gif";
import customer from "../../../images/customer.gif";
import inventory from "../../../images/inventory.gif";
import supply from "../../../images/supply.gif";
import employee from "../../../images/employee.gif";
import payment from "../../../images/payment.gif";
import admin from "../../../images/admin.gif";
import users from "../../../images/users.gif";
import {Label} from "../../../ui/label";
import Dashboard from '@mui/icons-material/SpaceDashboardRounded';
import User from '@mui/icons-material/AccountCircleTwoTone';
import Customer from '@mui/icons-material/PersonAddAltTwoTone';
import Supply from '@mui/icons-material/LocalShippingTwoTone';
import Inventory from '@mui/icons-material/InventoryTwoTone';
import Employee from '@mui/icons-material/EngineeringTwoTone';
import Payment from '@mui/icons-material/ShoppingCartTwoTone';
import Admin from '@mui/icons-material/AdminPanelSettingsTwoTone';
interface SideBarProps {
    setCurrentPage: (page: string) => void;
}
export function SideBar({ setCurrentPage }: SideBarProps) {
    const [title, setTitle] = useState("Dashboard")
    return (
        <>
            <div id={"user-nav-bar"} className={"flex flex-col items-center"}>

                {/*<div id="side-bar-icon"*/}
                {/*     className="flex justify-center items-center shadow-md bg-white  z-10 w-[3vw] h-[2.8vw] rounded-[25%] mt-3 mb-4 ms-10"*/}
                {/*style={{boxShadow:"0px 1px 10px #909090"}}>*/}
                {/*    /!*<img id="bar-icon" className="w-30 pr-2 z-5 scale-150" src={arrow} alt="Icon"/>*!/*/}
                {/*    <Label className="text-gray-700 font-bold absolute left-[8vw] text-[1.5vw] w-[20vw]">{title}</Label>*/}
                {/*</div>*/}
                <nav className="flex flex-col items-center justify-between h-[41.1vw] pt-[5vh]">
                    <a href="#" id="btnDashboard" className="relative flex items-center mb-6">
                        <Dashboard onClick={() => {setCurrentPage("dashboard"); setTitle("Dashboard")}} className="w-10 z-10 admin-icon"
                                       sx={{ fontSize: 32, cursor: 'pointer', color: title === "Dashboard" ? '#e0e0e0' : 'gray', transform: title === "Dashboard" ?'scale(1.2)' : "scale(1)", '&:hover': { color: '#e0e0e0'}}}/>
                        {/*<img onClick={() => {setCurrentPage("dashboard"); setTitle("Dashboard")}} className="w-8 lg:w-9 z-10 admin-icon" src={dashboard} alt="Dashboard"/>*/}
                    </a>
                    <a href="#" id="btnCustomer" className="relative flex items-center mb-6">
                        <Customer onClick={() => {setCurrentPage("customer"); setTitle("Customer Page")}} className="w-10 z-10 admin-icon"
                                   sx={{ marginLeft:0.5,  fontSize: 32, cursor: 'pointer', color: title === "Customer Page" ? '#e0e0e0' : 'gray', transform: title === "Customer Page" ?'scale(1.2)' : "scale(1)", '&:hover': { color: '#e0e0e0'}}}/>
                        {/*<img onClick={() => {setCurrentPage("customer"); setTitle("Customer Page")}} className="w-10 z-10 admin-icon" src={customer} alt="Customer"/>*/}
                    </a>
                    <a href="#" id="btnInventory" className="relative flex items-center mb-6">
                        <Inventory onClick={() => {setCurrentPage("inventory"); setTitle("Inventory Page")}} className="w-10 z-10 admin-icon"
                                   sx={{ fontSize: 32, cursor: 'pointer', color: title === "Inventory Page" ? '#e0e0e0' : 'gray', transform: title === "Inventory Page" ?'scale(1.2)' : "scale(1)", '&:hover': { color: '#e0e0e0'}}}/>
                        {/*<img onClick={() => {setCurrentPage("inventory"); setTitle("Inventory Page")}} className="w-10 z-10 admin-icon" src={inventory} alt="Inventory"/>*/}
                    </a>
                    <a href="#" id="btnSupplier" className="relative flex items-center mb-6">
                        <Supply onClick={() => {setCurrentPage("supplier"); setTitle("Supplier Page")}} className="w-10 z-10 admin-icon"
                                   sx={{ fontSize: 32, cursor: 'pointer',  color: title === "Supplier Page" ? '#e0e0e0' : 'gray', transform: title === "Supplier Page" ?'scale(1.2)' : "scale(1)", '&:hover': { color: '#e0e0e0'}}}/>
                        {/*<img onClick={() => {setCurrentPage("supplier"); setTitle("Supplier Page")}} className="w-11 z-10 admin-icon" src={supply} alt="Supplier"/>*/}
                    </a>
                    <a href="#" id="btnEmployee" className="relative flex items-center mb-6">
                        <Employee onClick={() => {setCurrentPage("employee"); setTitle("Employee Page")}} className="w-10 z-10 admin-icon"
                                   sx={{ fontSize: 32, cursor: 'pointer', color: title === "Employee Page" ? '#e0e0e0' : 'gray', transform: title === "Employee Page" ?'scale(1.2)' : "scale(1)", '&:hover': { color: '#e0e0e0'}}}/>
                        {/*<img onClick={() => {setCurrentPage("employee"); setTitle("Employee Page")}} className="w-10 z-10 admin-icon" src={employee} alt="Employee"/>*/}
                    </a>
                    <a href="#" id="btnSales" className="relative flex items-center mb-6">
                        <Payment onClick={() => {setCurrentPage("payment"); setTitle("Payment Page")}} className="w-10 z-10 admin-icon"
                                   sx={{ fontSize: 32, cursor: 'pointer', color: title === "Payment Page" ? '#e0e0e0' : 'gray', transform: title === "Payment Page" ?'scale(1.2)' : "scale(1)", '&:hover': { color: '#e0e0e0'}}}/>
                        {/*<img onClick={() => {setCurrentPage("payment"); setTitle("Payment Page")}} className="w-10 z-10 admin-icon" src={payment} alt="Payment"/>*/}
                    </a>
                    {/*<a href="#" id="btnAdminPanel" className="relative flex items-center mb-6">*/}
                    {/*    <Admin onClick={() => {setCurrentPage("admin"); setTitle("Admin Page")}} className="w-10 z-10 admin-icon"*/}
                    {/*               sx={{ fontSize: 32, cursor: 'pointer', color: title === "Admin Page" ? '#e0e0e0' : 'gray', transform: title === "Admin Page" ?'scale(1.2)' : "scale(1)", '&:hover': { color: '#e0e0e0'}}}/>*/}
                    {/*    /!*<img onClick={() => {setCurrentPage("admin"); setTitle("Admin Page")}} className="w-9 z-10 admin-icon" src={admin} alt="Admin"/>*!/*/}
                    {/*</a>*/}
                    {/*<a href="#" id="btnUsers" className="relative flex items-center mb-6">*/}
                    {/*    <User onClick={() => {setCurrentPage("user"); setTitle("User Page")}} className="w-10 z-10 admin-icon"*/}
                    {/*               sx={{ fontSize: 32, cursor: 'pointer', color: title === "User Page" ? '#e0e0e0' : 'gray', transform: title === "User Page" ?'scale(1.2)' : "scale(1)", '&:hover': { color: '#e0e0e0'}}}/>*/}
                    {/*    /!*<img onClick={() => {setCurrentPage("user"); setTitle("User Page")}} className="w-10 z-10 admin-icon" src={users} alt="Users"/>*!/*/}
                    {/*</a>*/}
                </nav>
            </div>
        </>
    );
}