import React, { useEffect, useState } from 'react';

// Theme
import { useTheme } from "@mui/material/styles";
import {
    Box,
    FormHelperText,
    Button
} from "@mui/material";

// Third party for form
import * as Yup from 'yup';
import { Formik } from 'formik';

// Form item
import { FormItem } from "../../../shared";
import { discountFormItems } from "../../../../constants/admin/discount.form-item.constant";
import dayjs from 'dayjs';
import DiscountService from '../../../../services/discount.service';
import { toast } from 'react-toastify';

export default function DiscountCU({ type }) {
    const theme = useTheme();

    const handleOnSubmit = (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        const data = {
            product_id: values.product_id,
            start_date: values.start_date,
            end_date: values.end_date,
            type: values.type,
            value: values.value
        };

        console.log("Debug: handleOnSubmit -> data", data)

        if (type === 'create') {
            DiscountService.create(data)
                .then((response) => {
                    toast.success('Create discount successfully', {
                        autoClose: 3000
                    });
                    resetForm();
                })
                .catch((error) => {
                    toast.error(error.response.data.message, {
                        autoClose: 3000
                    });
                })
                .finally(() => {
                    setSubmitting(false);
                });
        } else if (type === 'update') {
            DiscountService.update(userData.id, data)
                .then((response) => {
                    toast.success('Update discount successfully', {
                        autoClose: 3000
                    });
                })
                .catch((error) => {
                    toast.error(error.response.data.message, {
                        autoClose: 3000
                    });
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    }

    return (
        <Formik
            initialValues={{
                product_id: 1,
                start_date: dayjs().format('YYYY-MM-DD'),
                end_date: "",
                type: 1,
                value: 0,
            }}
            onSubmit={handleOnSubmit}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        {
                            discountFormItems.map((item, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: '1rem',
                                        }}
                                    >
                                        <FormItem
                                            name={item.name}
                                            label={item.label}
                                            type={item.type}
                                            value={values[item.name]}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            rangeLength={item.rangeLength ? item.rangeLength : null}
                                            options={item.options ? item.options : null}
                                            errors={errors}
                                            touched={touched}
                                            setFieldValue={setFieldValue}
                                        />
                                    </Box>
                                );
                            }
                            )}
                        {
                            errors.submit && (
                                <Box sx={{ mt: 3 }}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Box>
                            )
                        }
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '1rem',
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
                                    borderRadius: '0.5rem',
                                }}
                            >
                                {type === 'create' ? 'Create' : 'Update'}
                            </Button>
                        </Box>
                    </Box>
                </form>
            )}
        </Formik>
    );
}