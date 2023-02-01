import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ClientLayout from "./layouts";
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ClientLayout />
    </BrowserRouter>
);