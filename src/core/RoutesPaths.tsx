import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Contact = React.lazy(() => import("../contact"));
const Infrastructure = React.lazy(() => import("../infrastructure"));
const Partners = React.lazy(() => import("../partners"));
const Reservations = React.lazy(() => import("../reservations"));
const Statute = React.lazy(() => import("../statute"));
const Home = React.lazy(() => import("../home"));

const RoutesPaths = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/infrastructure",
    element: <Infrastructure />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
  {
    path: "/statute",
    element: <Statute />,
  },
]);

export default RoutesPaths;
