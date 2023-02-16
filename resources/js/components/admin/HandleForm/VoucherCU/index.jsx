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
import { voucherFormItems } from "../../../../constants/admin/voucher.form-item.constant.js";
import dayjs from 'dayjs';
import VoucherService from '../../../../services/voucher.service';
import { toast } from 'react-toastify';

export default function VoucherCU({ type }) {
    const theme = useTheme();

    const handleOnSubmit = (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        const data = {
            title: values.title,
            code: values.code,
            description: values.description,
            scope: values.scope,
            start_date: values.start_date,
            end_date: values.end_date,
            type: values.type,
            value: values.value,
            status: values.status,
            limit: values.limit
        };

        console.log("Debug: handleOnSubmit -> data", data)

        if (type === 'create') {
            VoucherService.create(data)
                .then((response) => {
                    toast.success('Create voucher successfully', {
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
            VoucherService.update(userData.id, data)
                .then((response) => {
                    toast.success('Update voucher successfully', {
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
                title: '',
                code: '',
                description: '',
                scope: [],
                start_date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                end_date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                type: 1,
                value: 0,
                status: 1,
                limit: 0,
                submit: null
            }}
            onSubmit={handleOnSubmit}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        {
                            voucherFormItems.map((item, index) => {
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