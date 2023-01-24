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
                index: "/aboutus",
                element: <AboutUs />
            },
            {
                index: "/contactus",
                element: <ContactUs />
            },
            {
                index: "inventory/bentley",
                element: <bentley />
            },
            {
                index: "inventory/bentley/:carId",
                element: <bentleyDetail />
            },
            {
                index: "inventory/ferrari",
                element: <ferrari />
            },
            {
                index: "inventory/ferrari/:carId",
                element: <ferrariDetail />
            },
            {
                index: "inventory/koenigsegg",
                element: <koenigsegg />
            },
            {
                index: "/inventory/koenigsegg/:carId",
                element: <koenigseggDetail />
            },
            {
                index: "/inventory/lamborghini",
                element: <lamborghini />
            },
            {
                index: "/inventory/lamborghini/:carId",
                element: <lamborghiniDetail />
            },
            {
                index: "/inventory/mclaren",
                element: <mclaren />
            },
            {
                index: "/inventory/mclaren/:carId",
                element: <mclarenDetail />
            },
            {
                index: "/newsandevents",
                element: <newsAndEvents />
            },
            {
                index: "/inventory/porsche",
                element: <porsche />
            },
            {
                index: "/inventory/porsche/:carId",
                element: <porscheDetail />
            },
            {
                index: "/inventory/rollsroyce",
                element: <rollsRoyce />
            },
            {
                index: "/inventory/rollsroyce/:carId",
                element: <ContactUs />
            },
            {
                index: "/service",
                element: <serviceAndParts />
            }
        ]
    }
])

// Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)