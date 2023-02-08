import React, { useEffect, useState, forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';
import { Logo } from '../../../../components/admin';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLogged from '../../../../hooks/useLogged';
import RegisterForm from '../AuthForms/RegisterForm';
import { Snackbar } from '@mui/material';
import { Alert } from '../../../../components/shared';

const Register = () => {
    const logged = useLogged();
    const navigate = useNavigate();
    useEffect(() => {
        if (logged) {
            navigate('/');
        }
    }, [logged]);
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false,
        });
    };
    return (
        <AuthWrapper>
            {notify.isOpen && (
                <Snackbar open={notify.isOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={notify.type} sx={{ width: '100%' }}>
                        {notify.message}
                    </Alert>
                </Snackbar>
            )}
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Sign up
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        fontSize="16px"
                                                        textAlign={matchDownSM ? 'center' : 'inherit'}
                                                    >
                                                        Enter your credentials to continue
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <RegisterForm setNotify={setNotify}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="/login"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Already have an account?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    LAMP Bench
                </Grid>
            </Grid>
        </AuthWrapper>
    );
};

export default Register;