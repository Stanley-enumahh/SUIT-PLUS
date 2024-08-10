import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Trends from "./components/Trends/Trends";
import AboutUs from "./components/AboutUs/about";
import EventPage from "./pages/EventPage";
import CustomPage from "./pages/Custompage";
import Login from "./pages/loginPage";
import CreateAccount from "./pages/createAccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trends",
    element: <Trends />,
  },
  {
    path: "/eventspage",
    element: <EventPage />,
  },
  {
    path: "/customPage",
    element: <CustomPage />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/CreateAccount",
    element: <CreateAccount />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
