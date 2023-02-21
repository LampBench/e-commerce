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
import { storage } from '../../../../services/firebase';
import { randomString } from '../../../../utils/function.helper';

function ProductCU({ type }) {
    const [images, setImages] = useState([]);

    const onSubmit = (data) => {
        if (images.length > 0) {
            console.log(images);
            const promises = [];
            images.forEach(image => {
                console.log(image);
                promises.push(
                    new Promise((resolve, reject) => {
                        const uploadTask = storage.ref(`images/${randomString(5)+image.fileName}`).putString(image.file, 'data_url');
                        uploadTask.on(
                            'state_changed',
                            snapshot => {},
                            error => {
                                console.log(error);
                                reject(error);
                            }
                        );
                        uploadTask.then(() => {
                            storage.ref('images').child(uploadTask.snapshot.metadata.name).getDownloadURL().then(url => {
                                resolve(url);
                            });
                        });
                    })
                );
            });
            Promise.all(promises).then(urls => {
                console.log(urls);
                // Call api
                console.log(data);
            });
        }

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
            </form>
        </Box>
    );
}

export default ProductCU;