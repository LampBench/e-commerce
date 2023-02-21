import React from 'react';
import { MainCard, BackButton } from '../../../components/shared';
import { useNavigate } from 'react-router-dom';
import { ProductCU } from '../../../components/admin/HandleForm';

function CreateProduct({ type }) {
    const navigate = useNavigate();

    return (
        <MainCard 
            title="Create Product"
            secondary={<BackButton navigator={navigate} text='Back' />}
        >
            <ProductCU type={type} />
        </MainCard>
    );
}

export default CreateProduct;