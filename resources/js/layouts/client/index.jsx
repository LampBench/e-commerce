import React from "react";
import {
    Navbar
} from "./components";

import {
    Container,
} from "@mui/material";

import withPermission from "../../routes/hocs/WithPermission";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ClientLayout() {
    const user = useSelector((state) => state.user.data);
    return (
        <div className="container">
            <Navbar user={user} />
            <Container maxWidth="lg">
                <Outlet />
            </Container>
        </div>
    );
};

export default ClientLayout;