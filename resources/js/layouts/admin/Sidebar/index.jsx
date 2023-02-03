import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, useMediaQuery } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';
import MenuCard from "./MenuCard";

function Sidebar({ drawerOpen, drawerToggle, window }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const drawer = (
        <React.Fragment>
            <Box sx={{ display: { xs: 'block', md: 'none' } }} >
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }} >
                    LOGO
                </Box>
            </Box>
            <BrowserView>
                <PerfectScrollbar
                    component="div"
                    style={{
                        height: !matches ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                    }}
                >

                </PerfectScrollbar>
            </BrowserView>
            <MobileView>
                <Box sx={{ px: 2}}>

                </Box>
            </MobileView>
        </React.Fragment>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box 
            component="nav" 
            sx={{ 
                flexShrink: { md: 0 }, 
                width: matches ? drawerWidth : 'auto' 
            }}
            aria-label="Drawer"
        >
            <Drawer
                container={container}
                variant={matches ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    },
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

export default Sidebar;