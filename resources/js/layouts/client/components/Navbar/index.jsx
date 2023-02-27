import React, { useState, useEffect } from "react";
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
import CategoryService from "../../../../services/category.service";
import { LOG_OUT } from "../../../../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { SET_CATEGORY, SET_CHOSEN_CATEGORY } from "../../../../reducers/categorySlice";
import NestedDropdown from "../../../../components/shared/NestedDropdown";

function Navbar(props) {
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector((state) => state.category.categories);

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

    const getCategories = () => {
        if (categories.length === 0) {
            CategoryService.getCategories({
                sort: "name",
                order: "asc",
                perPage: "all",
                search: "",
            })
                .then((res) => {
                    dispatch(SET_CATEGORY(res.data.data));
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    const setAPIParams = (item) => {
        dispatch(SET_CHOSEN_CATEGORY(item));
        navigate('/products');
    }

    useEffect(() => {
        getCategories();
    }, []);


    return (
        <AppBar position="sticky">
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                        <div className="navbar-dropdown">
                            <NestedDropdown
                                items={categories}
                                dropdownName={"categories"}
                                title={"Categories"}
                                drop={'down'}
                                setAPIParams={setAPIParams}
                            >
                            </NestedDropdown>
                        </div>
                        {
                            MenuList.map((page, index) => {
                                return (
                                    <NavLink
                                        key={index}
                                        to={page.href}
                                        className={
                                            ({ isActive }) => (
                                                isActive ? style.navLink + ' ' + style.navLinkActive : style.navLink
                                            )
                                        }
                                    >
                                        <Typography textAlign={'center'}>{page.title}</Typography>
                                    </NavLink>
                                )
                            })
                        }
                    </Box>
                    {/* -------- Cart -------- */}
                    <Cart sx={{ p: 0, mr: 3 }} />
                    {/* -------- Profile -------- */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Account">
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
                                        if (!props.permissions['dashboard']?.includes('view') && page.isPermission === true) return null;
                                        return (
                                            <MenuItem key={index} onClick={handleCloseUserMenu}>
                                                <Typography textAlign={'center'} onClick={
                                                    () => {
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