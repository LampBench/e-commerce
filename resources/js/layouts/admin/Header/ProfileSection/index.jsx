import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { 
    Chip,
    Avatar,
    Popper,
    Paper,
    ClickAwayListener,
    Stack,
    Box,
    Typography,
    Divider,
    List,
    ListItemIcon,
    ListItemText,
    Grid,
    ListItemButton
} from "@mui/material";
import {
    Settings as SettingIcon,
} from "@mui/icons-material";
import { MainCard, Transitions } from "../../../../components/shared";
import PerfectScrollbar from 'react-perfect-scrollbar';

function ProfileSection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const anchorRef = useRef(null);
    const user = useSelector((state) => state.user.data);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <React.Fragment>
            <Chip
                sx={{
                    height: '48px',
                    alignItems: 'center',
                    borderRadius: '27px',
                    transition: 'all .2s ease-in-out',
                    borderColor: theme.palette.primary.light,
                    backgroundColor: theme.palette.primary.light,
                    '&[aria-controls="menu-list-grow"], &:hover': {
                        borderColor: theme.palette.primary.main,
                        background: `${theme.palette.primary.main}!important`,
                        color: theme.palette.primary.light,
                        '& svg': {
                            stroke: theme.palette.primary.light
                        }
                    },
                    '& .MuiChip-label': {
                        lineHeight: 0
                    }
                }}
                icon={
                    <Avatar
                        src={user.avatar}
                        sx={{
                            ...theme.typography.mediumAvatar,
                            margin: '8px 0 8px 8px !important',
                            cursor: 'pointer'
                        }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color="inherit"
                    />
                }
                label={
                    <SettingIcon stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />
                }
                variant="outlined"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="primary"
            />
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14],
                            },
                        },
                    ],
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={() => setOpen(false)}>
                                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                    <Box sx={{ p: 2}}>
                                        <Stack>
                                            <Stack direction="row" spacing={0.5} alignItems="center">
                                                <Typography variant="h5">Chào buổi sáng,</Typography>
                                                <Typography component="span" variant="h5" sx={{ fontWeight: 400 }}>
                                                    {user.name}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                        <Typography variant="subtitle2">Trang quản trị</Typography>
                                        <Divider />
                                    </Box>
                                    <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 250px)', overflowX: 'hidden' }}>
                                        <Box sx={{ p: 2 }}>
                                            <List
                                                component="nav"
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 350,
                                                    minWidth: 300,
                                                    backgroundColor: theme.palette.background.paper,
                                                    borderRadius: '10px',
                                                    [theme.breakpoints.down('md')]: {
                                                        minWidth: '100%'
                                                    },
                                                    '& .MuiListItemButton-root': {
                                                        mt: 0.5
                                                    }
                                                }}
                                            >
                                                <ListItemButton
                                                    sx={{ borderRadius: `14px` }}
                                                    onClick={(event) => console.log(event)}
                                                >
                                                    <ListItemIcon>
                                                        <SettingIcon stroke={1.5} size="1.3rem" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                                                </ListItemButton>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <SettingIcon stroke={1.5} size="1.3rem" />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={
                                                            <Grid container spacing={1} justifyContent="space-between">
                                                                <Grid item>
                                                                    <Typography variant="subtitle2">Cài đặt</Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Chip
                                                                        label="Cập nhật"
                                                                        size="small"
                                                                        sx={{
                                                                            bgcolor: theme.palette.warning.dark,
                                                                            color: theme.palette.background.default
                                                                        }}
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </List>
                                        </Box>
                                    </PerfectScrollbar>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </React.Fragment>
    )
}

export default ProfileSection;