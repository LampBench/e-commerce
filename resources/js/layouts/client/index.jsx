import React from "react";
import {
    Navbar
} from "./components";
import {
    Container,
} from "@mui/material";
function ClientLayout(props) {
    return (
        <div className="container">
            <Navbar user={props.user} />
            <Container maxWidth="lg">
                {props.children}
            </Container>
        </div>
    );
};

export default ClientLayout;