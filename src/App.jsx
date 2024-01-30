import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './component/navbar'
import Main from './component/main'
import Projects from './component/projects'
import Contact from "./component/contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const App =  () => {

    return (<>

        <Navbar />
        <Outlet/>

    </>);
}

const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        children: [
            
            {
                path: "/",
                element: <Main/>
        
            },
            {
                path: "/projects",
                element: <Projects/>
        
            },
            {
                path: "/contact",
                element: <Contact/>
        
            }, ]
    }
  

])


const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<RouterProvider router={router}/>);
