import React, { useEffect, useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import { Grid, useMediaQuery } from "@mui/material";
import { MainCard } from "../../../components/shared";
import FormCreate from "../../../components/admin/HandleForm/FormCreate";
import { CategoryFormItems } from "../../../constants/admin/category.form-item.contstant";
import CategoryService from "../../../services/category.service";
import { toast } from "react-toastify";

const CreateCategory = () => {
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const [data, setData] = useState([]);
    const params = {};

    const service = (data, setSubmitting, resetForm) => {
        CategoryService.create(data)
            .then((response) => {
                toast.success("Create category successfully", {
                    autoClose: 3000,
                });
                resetForm();
            })
            .catch((error) => {
                toast.error("Create category failed", {
                    autoClose: 3000,
                });
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    const getTransformedData = (data, transformedData, keys) => {
        data.forEach((e) => {
            keys.push(e.id);
            transformedData.push(e);
            e.key = keys.join("-");
            e.label = e.name;
            if (e.all_children.length === 0) {
                keys.pop();
                return;
            }
            e.children = e.all_children;
            getTransformedData(e.children, transformedData, keys);
            keys.pop();
        });
    };

    useEffect(() => {
        CategoryService.getCategories(params).then((res) => {
            const transformedData = [];
            const keys = [];
            getTransformedData(res.data.data, transformedData, keys);
            setData(transformedData.filter((e) => e.parent_id === null));
        });
    }, []);

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
                    <FormCreate
                        dataTrans={data}
                        FormItems={CategoryFormItems}
                        service={service}
                    />
                </Grid>
            </Grid>
        </MainCard>
    );
};
export default withPermission("categories", "create")(CreateCategory);
