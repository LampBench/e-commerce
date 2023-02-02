import React from "react";
import { Button } from "@mui/material";

function ClientLayout(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ClientLayout;