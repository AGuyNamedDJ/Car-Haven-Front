// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Utilities


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
            }
        ]
    }
])

// Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)