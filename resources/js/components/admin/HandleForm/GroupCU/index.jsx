import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Typography,
    Divider,
    CircularProgress,
    Backdrop

} from '@mui/material';
import TableGroup from '../../TableGroup';
import { FormItemRHF } from '../../../shared';
import GroupService from '../../../../services/group.service';
import { groupFormItems } from '../../../../constants/admin/group.form-item.constant';
import { mappingRules } from '../../../../utils/function.helper';
import { useForm } from 'react-hook-form';
import {
    Save as SaveIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function GroupCU(){
    const [permissions, setPermissions] = useState([]);
    const [modules, setModules] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCheck = (event, module, permission) => {
        const newPermissions = { ...permissions };
        newPermissions[module][permission].checked = event.target.checked;
        setPermissions(newPermissions);
    }

    useEffect(() => {
        GroupService.getModules()
            .then((response) => {
                setModules(response.data.modules);
                setPermissions(response.data.permissions);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleOnSubmit = (values) => {
        const data = {
            ...values,
            permissions
        };
        setSubmitting(true);
        GroupService.createGroup(data)
            .then((response) => {
                navigate(`/admin/groups/${response.data.data.id}`);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    }

    const handleMappingRules = (items) => {
        return mappingRules(items);
    }

    return (
        isLoading ? (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </Box>
        ) : (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                }}
            >
                {
                    submitting && (
                        <Backdrop
                            sx={{
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                                color: '#fff',
                            }}
                            open={submitting}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    )
                }
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 3,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            Group Infomations
                        </Typography>
                    </Box>
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                        {
                            groupFormItems.map((item, index) => (
                                <FormItemRHF
                                    key={index}
                                    name={item.name}
                                    label={item.label}
                                    type={item.type}
                                    register={register}
                                    errors={errors}
                                    rules={item.rules}
                                    options={item.options || null}
                                />
                            ))
                        }
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                mb: 2,
                            }}
                        >
                            <Button
                                variant="contained"
                                type="submit"
                                size='large'
                                startIcon={<SaveIcon />}
                            >
                                Save
                            </Button>
                        </Box>
                    </form>
                    <Divider />
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                mt: 3,
                                mb: 2,
                            }}
                        >
                            Group Permissions
                        </Typography>
                        <TableGroup
                            modules={modules}
                            permissions={permissions}
                            handleCheck={handleCheck}
                        />
                    </Box>
                </Box>
            </Box>
        )
    );
}

export default GroupCU;
