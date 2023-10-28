import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { AppContextProvider } from "./components/context/AppContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
    
    );
