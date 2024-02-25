import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout/MainLayout.tsx";
import Cars from "./pages/cars/Cars.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";
import CarsUpdated from "./pages/cars/CarsUpdated.tsx";
import CarsAdd from "./pages/cars/CarsAdd.tsx";
import BrandsAdd from "./pages/brands/BrandsAdd.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <MainLayout />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
            {
              path: "/cars",
              element: <Cars />,
            },

            {
              path: "/cars-added",
              element: <CarsAdd />,
            },
            {
              path: "/cars-updated",
              element: <CarsUpdated />,
            },
             {
              path: "/brand-added",
              element: <BrandsAdd />,
            },
          ],
        },
      ])}
    />
  </React.StrictMode>
);
