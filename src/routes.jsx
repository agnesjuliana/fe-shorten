import React from "react";

import Home from "./views/admin/home";
import ListShorten from "./views/admin/list-shorten";
import Profile from "./views/admin/profile";
import Login from "./views/auth/login";
import Register from "./views/auth/register";
import AboutUs from "./views/landing-page/about-us";
import ContactUs from "./views/landing-page/contact-us";

const routes = [
    {
        path: "home",
        layout: "/admin",
        name: "Home Admin",
        component: <Home/>,
    },
    {
        path: "list-shorten",
        layout: "/admin",
        name: "Shorten Admin",
        component: <ListShorten/>,
    },
    {
        path: "profile",
        layout: "/admin",
        name: "Profile Admin",
        component: <Profile/>,
    },
    {
        path: "login",
        layout: "/auth",
        name: "Login Page",
        component: <Login/>,
    },
    {
        path: "register",
        layout: "/auth",
        name: "Register Page",
        component: <Register/>,
    },
    {
        path: "about-us",
        layout: "/landing-page",
        name: "About Us",
        component: <AboutUs/>,
    },
    {
        path: "contact-us",
        layout: "/landing-page",
        name: "Contact Us",
        component: <ContactUs/>,
    },
]

export default routes;