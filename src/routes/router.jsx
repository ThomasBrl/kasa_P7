import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Footer from "../layout/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar";
import Main from "../layout/Main/Main.jsx";
import Banner from "../layout/Banner/Banner";
import ErrorPageNotFound from "../pages/ErrorPageNotFound/ErrorPageNotFound"

const HeaderFooterLayout = () => {
    return <>
        <Navbar/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </>
}

export const router = createBrowserRouter ([
    {
        element: <HeaderFooterLayout />,
        errorElement: <ErrorPageNotFound/>,
        children: [
            {
                path:"/",
                element: <App/>
            },
            {
                path: "/appartement",
                element:<h1>Nos appartements</h1>  
            },
            {
                path: "/about",
                element: (
                <h1>A propos</h1>,
                <Banner/>
                )
            },
            {
                path: "/contact",
                element: <h1>Contact</h1>
            }
        ]
    },
])