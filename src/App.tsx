import RoutesPaths from "./core/RoutesPaths";
import React from "react";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={RoutesPaths} />
    </React.StrictMode>
  );
}

export default App;
