import React from "react";

import { Link as RouterLink } from "react-router-dom";

import { 
    styled,
    Typography,
    Link,
    Container,
    Box,
    Grid,
    Paper,
    Button,
} from "@mui/material";

import {
    ErrorOutline as ErrorOutlineIcon,
} from "@mui/icons-material";

import {
    useTheme,
} from "@mui/material/styles";

export default function Error403() {
    const theme = useTheme();

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                }}
            >
                <Paper
                    sx={{
                        width: "100%",
                        maxWidth: 600,
                        p: 4,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom
                                sx={{textAlign: "center"}}
                            >
                                Access Denied
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                gutterBottom
                                sx={{textAlign: "center"}}
                            >
                                You do not have permission to access this page.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <ErrorOutlineIcon
                                    sx={{
                                        fontSize: 100,
                                        color: theme.palette.error.main,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component={RouterLink}
                                    to="/"
                                >
                                    Go Home
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
}
