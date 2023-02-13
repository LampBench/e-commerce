import React, { useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import { Grid, useMediaQuery } from "@mui/material";
import { MainCard } from "../../../components/shared";
import FormCreate from "../../../components/admin/HandleForm/FormCreate";
import { Alert } from "../../../components/shared";
import { CategoryFormItems } from "../../../constants/admin/category.form-item.contstant";
import CategoryService from "../../../services/category.service";

const CreateCategory = () => {
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false,
        });
    };

    const service = (data, setSubmitting, resetForm) => {
        CategoryService.create(data)
            .then((response) => {
                setNotify({
                    isOpen: true,
                    message: "Create Category successfully",
                    type: "success",
                });
                resetForm();
            })
            .catch((error) => {
                setNotify({
                    isOpen: true,
                    message: "Create Category failed",
                    type: "error",
                });
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <MainCard title="Create a new category">
            <Grid
                container
                spacing={matchDownSM ? 2 : 4}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid item xs={12} md={6}>
                    {notify.isOpen && (
                        <Alert
                            onClose={handleClose}
                            severity={notify.type}
                            sx={{ width: "100%" }}
                        >
                            {notify.message}
                        </Alert>
                    )}
                    <FormCreate
                        FormItems={CategoryFormItems}
                        setNotify={setNotify}
                        service={service}
                    />
                </Grid>
            </Grid>
        </MainCard>
    );
};
export default withPermission("categories", "create")(CreateCategory);
