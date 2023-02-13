import React, { useState, useEffect, useMemo } from 'react';
import {
    Box,
    FormHelperText,
    useMediaQuery,
    Button,
    Typography,
    Divider,
    CircularProgress
} from '@mui/material';
import TableGroup from '../../TableGroup';
import { FormItem } from '../../../shared';
import GroupService from '../../../../services/group.service';
import { groupFormItems } from '../../../../constants/admin/group.form-item.constant';
import { mappingRules } from '../../../../utils/function.helper';
import { useForm } from 'react-hook-form';

function GroupCU(){
    const [permissions, setPermissions] = useState([]);
    const [modules, setModules] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    useEffect(() => {
        GroupService.getModules()
            .then((response) => {
                setModules(response.data.data.modules);
                setPermissions(response.data.data.permissions);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleOnSubmit = (values, { setSubmitting, resetForm }) => {
        // Submit form
    }

    const handleMappingRules = (items) => {
        return mappingRules(items);
    }

    const handleCheck = (event, module, permission) => {
        const newPermissions = { ...permissions };
        newPermissions[module][permission].checked = event.target.checked;
        setPermissions(newPermissions);
    }

    return (
        isLoading ? (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}
            >
                <CircularProgress />
            </Box>
        ) : (
            <Formik
            initialValues={{
                name: '',
                description: '',
                submit: null
            }}
            onSubmit={handleOnSubmit}
            validationSchema={schema}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 2
                        }}
                    >
                        <Typography
                            variant="h5"
                            color="textPrimary"
                        >
                            Create group
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Save
                        </Button>
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        {groupFormItems.map((item, index) => (
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
                        ))}
                    </Box>
                    <TableGroup 
                        modules={modules}
                        mode="edit"
                        permissions={permissions}
                        setPermissions={setPermissions}
                        handleCheck={handleCheck}
                    />
                </form>
            )}
        </Formik>
        )
    );
}

export default GroupCU;