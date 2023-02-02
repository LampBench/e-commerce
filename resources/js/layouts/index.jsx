import React from "react";
import ClientLayout from "./client";

function LayoutWrapper(props) {
    return (
        <ClientLayout {...props}>
            <h1> Xin Chào</h1>
        </ClientLayout>
    );
}

export default LayoutWrapper;