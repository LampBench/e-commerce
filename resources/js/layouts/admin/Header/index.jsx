import React from "react";
import { Avatar, Box, ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { 
    Menu as MenuIcon,
} from "@mui/icons-material";
import ProfileSection from "./ProfileSection";

function Header({ handleLeftDrawerToggle }) {
    const theme = useTheme();
    return (
        <React.Fragment>

            <Box
                sx={{
                    display: "flex",
                    width: "228",
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box
                    component="span"
                    sx={{
                        display: {
                            xs: "none",
                            md: "block",
                        },
                        flexGrow: 1,
                    }}
                >
                    <h1>Admin</h1>
                </Box>
                <ButtonBase
                    sx={{
                        borderRadius: "12px",
                        overflow: "hidden",
                    }}
                >
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .3s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light,
                            }
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <MenuIcon stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            <ProfileSection />
        </React.Fragment>
    )
}

export default Header;