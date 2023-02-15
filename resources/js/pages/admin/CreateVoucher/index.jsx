import React from 'react';
import withPermission from '../../../routes/hocs/WithPermission';
import { MainCard } from '../../../components/shared';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../../components/shared';

function CreateVoucher() {
    const navigate = useNavigate();

    return (
        <MainCard 
            title="Create Voucher"
            secondary={<BackButton navigator={navigate} text="Back" />}
        >
        </MainCard>
    );
}

export default withPermission('vouchers', 'create')(CreateVoucher);