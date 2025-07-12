import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Item from "./components/Item";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestroMenu from "./components/RestroMenu";
const AppContent=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const AppRouter=createBrowserRouter([
    {   path: "/",
        element:<AppContent/>,
        children:[
    {
        path:"/",
        element:<Body/>,
    },
    {
        path:"/about",
        element: <AboutUs/>
    },
    {
        path:"/contact",
        element:<ContactUs/>,
    },
    {
        path : "/cart",
        element:<Cart/>
    },
    {
     path: "/restaurant/:resId",
     element: <RestroMenu />,
    }

    ],
     errorElement:<Error/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter}/> )
