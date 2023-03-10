import React, { useEffect, useState } from "react";
import {
    Box,
    FormHelperText,
    useMediaQuery,
    Button
} from "@mui/material";

import * as Yup from 'yup';
import { Formik } from 'formik';

import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { FormItem } from "../../../shared";
import { userFormItems } from "../../../../constants/admin/user.form-item.constant";

import UserService from "../../../../services/user.service";
import GroupService from "../../../../services/group.service";

import { mappingRules } from "../../../../utils/function.helper";

import { toast } from 'react-toastify';

function UserCU({ type, userData, ...orthers }) {

    const theme = useTheme();
    const [showPassword, setShowPassword] = React.useState(false);
    const [userGroupOptions, setUserGroupOptions] = useState([]);

    const handleOnSubmit = (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        const data = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            user_group_id: values.user_group_id,
        };
        if (type === 'create') {
            UserService.create(data)
                .then((response) => {
                    toast.success('Create user successfully', {
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
            UserService.update(userData.id, data)
                .then((response) => {
                    toast.success('Update user successfully', {
                        autoClose: 3000
                    });
                })
                .catch((error) => {
                    toast.error('Update user failed', {
                        autoClose: 3000
                    });
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    };

    const handleMappingRules = (items) => {
        return mappingRules(items);
    };

    useEffect(() => {
        GroupService.getGroups()
            .then((response) => {
                let options = [];
                response.data.groups.data.map((option) => {
                    options.push(
                        {
                            value: option.id,
                            text: option.name,
                        }
                    );
                });
                setUserGroupOptions(options);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <Formik
            initialValues={{
                first_name: userData ? userData.name : '',
                last_name: userData ? userData.last_name : '',
                email: userData ? userData.email : '',
                password: '',
                password_confirmation: '',
                user_group_id: userData ? userData.user_group_id : '',
                submit: null
            }}
            onSubmit={handleOnSubmit}
            validationSchema={Yup.object().shape(
                handleMappingRules(userFormItems)
            )}

        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
                <form noValidate onSubmit={handleSubmit} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        {
                            userFormItems.map((item, index) => {
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
                                            options={item.options ? eval(item.options) : null}
                                            showPassword={showPassword}
                                            setShowPassword={setShowPassword}
                                            errors={errors}
                                            touched={touched}
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

export default UserCU;