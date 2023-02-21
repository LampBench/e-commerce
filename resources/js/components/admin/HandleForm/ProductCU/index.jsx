import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Typography,
    Divider,
    CircularProgress,
    Backdrop
} from '@mui/material';
import { FormItemRHF } from '../../../shared';
import { useForm } from 'react-hook-form';
import {
    Save as SaveIcon,
} from '@mui/icons-material';
import { productFormItems } from '../../../../constants/admin/product.form-item.constant';
import { ImageUpload } from '../../../shared';

function ProductCU({ type }) {
    const [images, setImages] = useState([]);

    const onSubmit = (data) => {
        // 
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    return (
        <Box>
            <Typography variant="h6" gutterBottom component="div">
                Product Information
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    productFormItems.map((item, index) => (
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
            </form>
            <Divider />
            <Box sx={{ mt: 3 }}>
                <ImageUpload images={images} setImages={setImages} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt: 3,
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
        </Box>
    );
}

export default ProductCU;