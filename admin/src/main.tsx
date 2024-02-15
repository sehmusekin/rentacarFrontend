import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout/MainLayout.tsx";
import Cars from "./pages/cars/Cars.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";

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
          ],
        },
      ])}
    />
  </React.StrictMode>
);
