import React from "react";
import style from "./index.module.scss";
import withPermission from "../../../routes/hocs/WithPermission";
import { Grid, useMediaQuery } from "@mui/material";
import { MainCard } from "../../../components/shared";
import { UserCU } from "../../../components/admin/HandleForm";

function CreateUser() {
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <MainCard title="Create a new user">
            <Grid container spacing={matchDownSM ? 2 : 4} sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Grid item xs={12} md={6}>
                    <UserCU type="create" />
                </Grid>
            </Grid>
        </MainCard>
    );
}

export default withPermission('users', 'create')(CreateUser);