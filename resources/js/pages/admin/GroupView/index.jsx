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

function GroupView() {
    // Get id from url
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [permissions, setPermissions] = useState([]);
    const [group, setGroup] = useState({});
    const [modules, setModules] = useState([]);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        GroupService.getPermissions(id)
            .then((response) => {
                setPermissions(response.data.data.permissions);
                setGroup(response.data.data.group);
                setModules(response.data.data.modules);
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

    const handleSave = () => {

        GroupService.updatePermissions(group.id, permissions)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setEditMode(false);
            });
    };

    console.log("Debug permissions: ", permissions);

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
                    <div>
                        <Switch
                            checked={editMode}
                            onChange={() => setEditMode(!editMode)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        {editMode && <Button 
                                        variant="contained" 
                                        color="primary" 
                                        sx={{ ml: 2 }}
                                        onClick={() => {
                                            handleSave();
                                        }}
                                    >Save</Button>}
                    </div>
                }
            >
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

export default GroupView