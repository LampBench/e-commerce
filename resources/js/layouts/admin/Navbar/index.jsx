import React from "react";

import { AppBar, Toolbar } from "@mui/material";
import Header from "../Header";
function Navbar(props) {

    const handleLeftDrawerToggle = () => {
        props.handleLeftDrawerToggle();
    };
    const drawerWidth = 240;

    return (
        <AppBar
            enableColorOnDark
            position="fixed"
            color="inherit"
            elevation={0}
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <Header handleLeftDrawerToggle={props.handleLeftDrawerToggle} />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;