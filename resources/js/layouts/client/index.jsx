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
    const permissions = useSelector((state) => state.user.permissions);
    console.log("Debug permissions: ", permissions);
    return (
        <div className="container">
            <Navbar user={user} permissions={permissions}/>
            <Container maxWidth="lg">
                <Outlet />
            </Container>
        </div>
    );
};

export default ClientLayout;