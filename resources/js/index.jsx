import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LayoutWrapper from "./layouts";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
import config from "./config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <LayoutWrapper />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </BrowserRouter>
    </Provider>
);