import React from 'react';
import withPermission from '../../../routes/hocs/WithPermission';
import { MainCard } from '../../../components/shared';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../../components/shared';
import { VoucherCU } from '../../../components/admin/HandleForm';
function CreateVoucher({type}) {
    const navigate = useNavigate();

    return (
        <MainCard 
            title="Create Voucher"
            secondary={<BackButton navigator={navigate} text="Back" />}
        >
            <VoucherCU type={type} />
        </MainCard>
    );
}

export default withPermission('vouchers', 'create')(CreateVoucher);