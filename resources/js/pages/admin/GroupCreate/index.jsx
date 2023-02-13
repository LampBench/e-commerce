import React, { useState, useEffect } from 'react';
import withPermission from '../../../routes/hocs/WithPermission';
import { MainCard } from '../../../components/shared';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Typography,
    Divider
} from '@mui/material';
import {
    ArrowBack
} from '@mui/icons-material';
import { GroupCU } from '../../../components/admin/HandleForm';

function GroupCreate({type}) {
    const navigate = useNavigate();
    return (
        <MainCard 
            title="Create group"
            description="Create a new group"
            secondary={
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(-1)}
                    startIcon={<ArrowBack />}
                >
                    Back
                </Button>
            }
        >
            <GroupCU type={type} />
        </MainCard>
    );
}

export default withPermission('groups', 'create')(GroupCreate);