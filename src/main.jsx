import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { LoactionContextProvider } from "./context/LocationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoactionContextProvider>
    <App />
  </LoactionContextProvider>
);
