import React from "react";
import {
    Navbar,
    Footer
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
        <div>
            <Navbar user={user} permissions={permissions} />
            <Container maxWidth="lg">
                <Outlet />
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ClientLayout;