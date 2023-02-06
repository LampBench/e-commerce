import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import themes from '../themes';
import { useSelector } from "react-redux";
import Routes from "../routes";

function LayoutWrapper() {
    const customization = useSelector((state) => state.theme);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <Routes />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default LayoutWrapper;