import React from 'react';
import withPermission from '../../../routes/hocs/WithPermission';
import { MainCard } from '../../../components/shared';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../../components/shared';
import { DiscountCU } from '../../../components/admin/HandleForm';
function CreateDiscount({ type }) {
    const navigate = useNavigate();

    return (
        <MainCard
            title="Create Discount"
            secondary={<BackButton navigator={navigate} text="Back" />}
        >
            <DiscountCU type={type} />
        </MainCard>
    );
}

export default withPermission('discounts', 'create')(CreateDiscount);