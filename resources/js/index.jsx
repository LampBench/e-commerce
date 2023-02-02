import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LayoutWrapper from "./layouts";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
createRoot(document.getElementById("root")).render (
    <Provider store={store}>
        <BrowserRouter>
            <LayoutWrapper />
        </BrowserRouter>
    </Provider>
);