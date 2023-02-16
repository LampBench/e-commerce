import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { MainCard } from "../../../components/shared";
import {
    Box,
    CircularProgress,
    Grid,
    Typography,
    Button,
    Switch
} from "@mui/material";

import GroupService from "../../../services/group.service";

import TableGroup from "../../../components/admin/TableGroup";
import { FormDialog } from '../../../components/shared';
import { FormItemRHF } from '../../../components/shared';
import { groupFormItems } from '../../../constants/admin/group.form-item.constant';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SET_PERMISSIONS } from '../../../reducers/userSlice';
import { useDispatch } from 'react-redux';
import withPermission from '../../../routes/hocs/WithPermission';

function GroupView(props) {
    const { selfPermission } = props;
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [permissions, setPermissions] = useState([]);
    const [group, setGroup] = useState({});
    const [modules, setModules] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        GroupService.getPermissions(id)
            .then((response) => {
                setPermissions(response.data.permissions);
                setGroup(response.data.group);
                setModules(response.data.modules);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleChangePermission = (event, module, permission) => {
        const newPermissions = { ...permissions };
        newPermissions[module][permission].checked = event.target.checked;
        setPermissions(newPermissions);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSave = () => {
        GroupService.updatePermissions(group.id, permissions)
            .then((response) => {
                toast.success('Update permissions successfully', {
                    autoClose: 3000
                });
            })
            .catch((error) => {
                toast.error('Update permissions failed', {
                    autoClose: 3000
                });
            })
            .finally(() => {
                setEditMode(false);
            });
    };

    const handleSaveInfo = (values) => {
        GroupService.updateGroup(group.id, values)
            .then((response) => {
                setGroup(response.data.group);
                toast.success('Update group successfully', {
                    autoClose: 3000
                });
            })
            .catch((error) => {
                console.log(error);
                toast.error('Update group failed', {
                    autoClose: 3000
                });
            })
            .finally(() => {
                setOpenDialog(false);
            });
    };

    if (isLoading) {
        return (
            <MainCard title={"Group view"}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '120px',
                }}>
                    <CircularProgress />
                </Box>
            </MainCard>
        );
    } else {
        return (
            <MainCard 
                title={"Group: " + group.name}
                secondary={
                    selfPermission.groups?.includes('update') ? (
                        <div>
                            {editMode && (
                                <>
                                    <Button
                                        variant="contained"
                                        onClick={handleSave}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleOpenDialog()}
                                        sx={{ ml: 1 }}
                                    >
                                        Change infomations
                                    </Button>
                                </>
                            )}
                            <Switch
                                checked={editMode}
                                onChange={() => setEditMode(!editMode)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    ) : null
                }
            >
                <FormDialog
                    title="Change group infomations"
                    open={openDialog}
                    onClose={handleCloseDialog}
                    onSave={handleSubmit(handleSaveInfo)}
                    isLoading={isLoading}
                >
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
                                value={group[item.name]}
                            />
                        ))
                    }
                </FormDialog>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom component="div">
                            Group permissions
                        </Typography>
                        <TableGroup 
                            modules={modules}
                            permissions={permissions}
                            mode={editMode ? "edit" : "view"}
                            handleCheck={handleChangePermission}
                        />
                    </Grid>
                </Grid>
            </MainCard>
        );
    }
}

export default withPermission('groups', 'view')(GroupView);