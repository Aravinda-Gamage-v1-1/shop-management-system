import React from 'react';
import './App.css';
import {MainContent} from "./components/common/Main/MainContent";
import {NavBar} from "./components/common/NavBar/NavBar";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MainContent/>
        </BrowserRouter>
    </div>
  );
}

export default App;
