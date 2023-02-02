import React from "react";
import {
    Navbar
} from "./components";
import {
    Container,
} from "@mui/material";
function ClientLayout(props) {
    const user = {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300",
        role: "admin"
    }
    return (
        <div className="container">
            <Navbar user={user} />
            <Container maxWidth="lg">
                {props.children}
            </Container>
        </div>
    );
};

export default ClientLayout;