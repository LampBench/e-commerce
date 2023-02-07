import React, { useState, useEffect } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import themes from '../themes';
import { useSelector } from "react-redux";
import Routes from "../routes";
import AuthServices from "../services/auth.service";
import { SET_USER } from "../reducers/userSlice";
import { useDispatch } from "react-redux";
import { Backdrop } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

function LayoutWrapper() {
    const customization = useSelector((state) => state.theme);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('TOKEN')) {
            AuthServices.check().then((response) => {
                dispatch(SET_USER(response.data.data));
                setLoggedIn(true);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    if(loading) {
        return (
            <Backdrop open={loading} sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                color: '#fff',
            }}>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }

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