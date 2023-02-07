import React, { useState } from "react";
import { 
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Avatar
} from "@mui/material";

import {
    MenuBook,
    Menu as MenuIcon
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";
import style from "./index.module.scss";
import { MenuList, SettingList } from "../../../../constants/client";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../../services/auth.service";
import { LOG_OUT } from "../../../../reducers/userSlice";
import { useDispatch } from "react-redux";

function Navbar(props) {
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const dispatch = useDispatch();
    
    const handleOpenNavMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElMenu(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        console.log('logout');
        AuthService.logout()
            .then((response) => {
                if (response.status === 200) {
                    dispatch(LOG_OUT());
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <MenuBook sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography 
                        variant="h6"
                        noWrap
                        component="a"
                        href="/" 
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BOOKSTORE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
                        <IconButton
                            size="large"
                            aria-label="Mở menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={
                                Boolean(anchorElMenu)
                            }
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {
                                MenuList.map((page, index) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                        <Typography textAlign={'center'}>{page.title}</Typography>
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>
                    <MenuBook sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}
                    >
                        BOOKSTORE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {
                            MenuList.map((page, index) => (
                                <NavLink
                                    key={index}
                                    to={page.href}
                                    className={
                                        ({isActive}) => (
                                            isActive ? style.navLink + ' ' + style.navLinkActive : style.navLink
                                        )
                                    }
                                >
                                    <Typography textAlign={'center'}>{page.title}</Typography>
                                </NavLink>
                            ))
                        }
                    </Box>
                    {/* -------- Cart -------- */}
                    <Cart sx={{ p: 0, mr: 3}}/>
                    {/* -------- Profile -------- */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Tài khoản">
                            <IconButton
                                onClick={handleOpenUserMenu} sx={{ p: 0 }}
                            >
                                <Avatar alt="Avatar" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={
                                Boolean(anchorElUser)
                            }
                            onClose={handleCloseUserMenu}
                        >
                            {
                                props.user ? (
                                    SettingList.map((page, index) => {
                                        if (props.user.role !== 'admin' && page.isPermission === true) return null;
                                        return (
                                            <MenuItem key={index} onClick={handleCloseUserMenu}>
                                                <Typography textAlign={'center'} onClick={
                                                    () => {
                                                        console.log('page.href: ', page.href);
                                                        if (page.href === '/logout') {
                                                            handleLogout();
                                                        } else {
                                                            navigate(page.href);
                                                        }
                                                    }
                                                }>{page.title}</Typography>
                                            </MenuItem>
                                        )
                                    })
                                ) : (
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign={'center'} onClick={
                                            () => {
                                                console.log('navigate');
                                                navigate('/login');
                                            }
                                        }>Đăng nhập</Typography>
                                    </MenuItem>
                                )
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;