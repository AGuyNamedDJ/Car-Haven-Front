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
import bentley from ("./components/pages/inventory/bentley");
import bentleyDetail from ("./components/pages/inventory/bentleyDetail");
import bugatti from ("./components/pages/inventory/bugatti");
import bugattiDetail from ("./components/pages/inventory/bugattiDetail");
import financing from ("./components/pages/financing");
import ferrari from ("./components/pages/inventory/ferrari");
import ferrariDetail from ("./components/pages/inventory/ferrariDetail");
import koenigsegg from ("./components/pages/inventory/koenigsegg");
import koenigseggDetail from ("./components/pages/inventory/koenigseggDetail");
import lamborghini from ("./components/pages/inventory/lamborghini");
import lamborghiniDetail from ("./components/pages/inventory/lamborghiniDetail");
import mclaren from ("./components/pages/inventory/mclaren");
import mclarenDetail from ("./components/pages/inventory/mclarenDetail");
import newsAndEvents from ("./components/pages/newsAndEvents");
import porsche from ("./components/pages/inventory/porsche");
import porscheDetail from ("./components/pages/inventory/porscheDetail");
import rollsRoyce from ("./components/pages/inventory/rollsRoyce");
import rollsRoyceDetail from ("./components/pages/inventory/rollsRoyceDetail");
import serviceAndParts from ("./components/pages/serviceAndParts");



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
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            },
            {
                path: "inventory/bentley",
                element: <bentley />
            },
            {
                path: "inventory/bentley/:carId",
                element: <bentleyDetail />
            },
            {
                path: "inventory/ferrari",
                element: <ferrari />
            },
            {
                path: "inventory/ferrari/:carId",
                element: <ferrariDetail />
            },
            {
                path: "inventory/koenigsegg",
                element: <koenigsegg />
            },
            {
                path: "/inventory/koenigsegg/:carId",
                element: <koenigseggDetail />
            },
            {
                path: "/inventory/lamborghini",
                element: <lamborghini />
            },
            {
                path: "/inventory/lamborghini/:carId",
                element: <lamborghiniDetail />
            },
            {
                path: "/inventory/mclaren",
                element: <mclaren />
            },
            {
                path: "/inventory/mclaren/:carId",
                element: <mclarenDetail />
            },
            {
                path: "/newsandevents",
                element: <newsAndEvents />
            },
            {
                path: "/inventory/porsche",
                element: <porsche />
            },
            {
                path: "/inventory/porsche/:carId",
                element: <porscheDetail />
            },
            {
                path: "/inventory/rollsroyce",
                element: <rollsRoyce />
            },
            {
                path: "/inventory/rollsroyce/:carId",
                element: <ContactUs />
            },
            {
                path: "/service",
                element: <serviceAndParts />
            }
        ]
    }
])

// Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)