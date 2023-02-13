import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, FormHelperText, useMediaQuery, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { FormItem } from "../../../shared";

const FormCreate = ({ FormItems, setNotify, service }) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
    const customization = useSelector((state) => state.theme);
    const fields = FormItems.map(({ name }) => name);
    const handleOnSubmit = (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const data = {};
        fields.forEach((e) => {
            data[e] = "";
        });
        Object.keys(data).forEach((k, v) => {
            data[k] = values[`${k}`];
        });
        service(data, setSubmitting, resetForm);
    };

    const handleMappingRules = (items) => {
        const rules = {};
        items.forEach((item) => {
            rules[item.name] = item.rules;
        });
        return rules;
    };

    return (
        <Formik
            initialValues={{
                category_name: "",
                category_desc: "",
            }}
            onSubmit={handleOnSubmit}
            validationSchema={Yup.object().shape(handleMappingRules(FormItems))}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
            }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        {FormItems.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginTop: "1rem",
                                    }}
                                >
                                    <FormItem
                                        name={item.name}
                                        label={item.label}
                                        type={item.type}
                                        value={values[item.name]}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        rangeLength={
                                            item.rangeLength
                                                ? item.rangeLength
                                                : null
                                        }
                                        options={
                                            item.options
                                                ? eval(item.options)
                                                : null
                                        }
                                        errors={errors}
                                        touched={touched}
                                    />
                                </Box>
                            );
                        })}
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>
                                    {errors.submit}
                                </FormHelperText>
                            </Box>
                        )}
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "1rem",
                            }}
                        >
                            <Button
                                color="secondary"
                                variant="contained"
                                type="submit"
                                fullWidth
                                disabled={isSubmitting}
                                size="large"
                                sx={{
                                    borderRadius: "0.5rem",
                                }}
                            >
                                create
                            </Button>
                        </Box>
                    </Box>
                </form>
            )}
        </Formik>
    );
};
export default FormCreate;
