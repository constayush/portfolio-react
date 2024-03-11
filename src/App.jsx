import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './component/navbar'
import Main from './component/main'
import Projects from './component/projects'
import Contact from "./component/contact";
import { createBrowserRouter, RouterProvider, Outlet , BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./component/errorPage";




const root = ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <Routes>
    <Route path="/*"        element={<><Navbar/><ErrorPage/></>} />
    <Route path="/"         element={<><Navbar/><Main/></>} />
    <Route path="/projects" element={<><Navbar/><Projects/></>} />
    <Route path="/contact"  element={<><Navbar/><Contact/></>} />

 </Routes>
</BrowserRouter>);