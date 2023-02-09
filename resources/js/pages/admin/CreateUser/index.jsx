import React, { useState } from "react";
import style from "./index.module.scss";
import withPermission from "../../../routes/hocs/WithPermission";
import { Grid, useMediaQuery } from "@mui/material";
import { MainCard } from "../../../components/shared";
import { UserCU } from "../../../components/admin/HandleForm";
import { Alert } from "../../../components/shared";

function CreateUser() {
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });
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
        <MainCard title="Create a new user">
            <Grid container spacing={matchDownSM ? 2 : 4} sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Grid item xs={12} md={6}>
                    {notify.isOpen && (
                        <Alert onClose={handleClose} severity={notify.type} sx={{ width: '100%' }}>
                            {notify.message}
                        </Alert>
                    )}
                    <UserCU type="create" setNotify={setNotify}/>
                </Grid>
            </Grid>
        </MainCard>
    );
}

export default withPermission('users', 'create')(CreateUser);