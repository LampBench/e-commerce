import React from 'react';
import { manufacturerFormItems } from '../../../../constants/admin/manufacturer.form-item.constant';
import { FormItem } from "../../../shared";
import {
    Box,
    FormHelperText,
    Button
} from "@mui/material";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTheme } from "@mui/material/styles";
import { mappingRules } from "../../../../utils/function.helper";
import { toast } from 'react-toastify';

import ManufacturerService from '../../../../services/manufacturer.service';

function ManufacturerCU({type}) {
    const theme = useTheme();

    const handleOnSubmit = (values, { setSubmitting, resetForm }) => {
        ManufacturerService.create(values)
            .then((response) => {
                toast.success('Create manufacturer successfully', {
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
            }
        );
    }

    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                address: '',
                phone_number: '',
                email: '',
                type: '',
                submit: null
            }}
            validationSchema={
                Yup.object().shape(
                    mappingRules(manufacturerFormItems)
                )
            }
            onSubmit={handleOnSubmit}
        >
            {({errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values}) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        {
                            manufacturerFormItems.map((item, index) => (
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
                                    />
                                </Box>
                            ))
                        }
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

export default ManufacturerCU