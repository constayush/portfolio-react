import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './component/navbar'
import Main from './component/main'

import Contact from "./component/contact";
import { createBrowserRouter, RouterProvider, Outlet , BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./component/errorPage";
import Terminal from "./component/Terminal";
import Hero from "./component/Hero";


const root = ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <Routes>

    <Route path="/*"        element={<><Navbar/><ErrorPage/></>} />
    {/* <Route path="/"         element={<> <Navbar/><Main/></>} /> */}

    <Route path="/contact"  element={<> <Navbar/><Contact/></>} />
    <Route path="/terminal"  element={<><Terminal/></>} />
    <Route path="/"  element={<Hero/>} />
 </Routes>
</BrowserRouter>);