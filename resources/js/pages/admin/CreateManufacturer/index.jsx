import React from 'react';
import withPermission from '../../../routes/hocs/WithPermission';
import { MainCard } from '../../../components/shared';
import {
    Button,
} from '@mui/material';
import {
    ArrowBack as BackIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ManufacturerCU } from '../../../components/admin/HandleForm';
function CreateManufacturer() {
    const navigate = useNavigate();
    return (
        <MainCard 
            title="Create Manufacturer"
            subtitle="Create a new manufacturer"
            secondary={
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate(-1)}
                    startIcon={<BackIcon />}
                >
                    Back
                </Button>
            }
        >
            <ManufacturerCU type="create" />
        </MainCard>
    );
}

export default withPermission('manufacturers', 'create')(CreateManufacturer);