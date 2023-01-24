// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Utilities
import AboutUs from ("./components/utilities/AboutUs");
import ContactUs from ("./components/utilities/ContactUs");
import ErrorPage from ("./components/utilities/ErrorPage");
import FetchForHomePage from ("./components/utilities/FetchForHomepage");
import HomePage from ("./components/utilities/HomePage");

// Import Pages


// Router
const router = createBrowserRouter ([
    {
        path: "/",
        element: <FetchForHomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                index: "/aboutus",
                element: <AboutUs />
            },
            {
                index: "/contactus",
                element: <ContactUs />
            }
        ]
    }
])

// Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)