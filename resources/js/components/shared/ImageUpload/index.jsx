import React, { useState, useEffect } from 'react';
import style from "./index.module.scss";
import {
    Box,
    Grid,
    Typography,
    Button
} from '@mui/material';

function ImageUpload({ images, setImages, limit = 3 }) {
    const [disabled, setDisabled] = useState(false);

    function handleFileSelect(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            const image = {
                fileName : file.name,
                file : reader.result
            }
            setImages([...images, image]);
        });
        reader.readAsDataURL(file);
    }

    function handleAddMore() {
        document.querySelector('.file-input').click();
    }

    function handleRemoveImage(index) {
        setImages(images.filter((_, i) => i !== index));
    }

    useEffect(() => {
        if (images.length >= limit) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [images]);
        
    return (
        <div>
            <div className={style.image_upload}>
                <div className={style.image_display}>
                    {images.length === 0 && (
                        <span className={style.add_image_icon} onClick={handleAddMore}>+</span>
                    )}
                    {images.map((image, index) => (
                        <div style={{position: 'relative'}} key={index}>
                            <img src={image.file} alt={`Uploaded image ${index + 1}`} />
                            <span className={style.remove_image_icon} onClick={() => handleRemoveImage(index)}>x</span>
                        </div>
                    ))}
                </div>
            </div>
            <div style={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                }
            }>
                <Button variant="contained" onClick={handleAddMore} disabled={disabled}>Add more</Button>
                <input type="file" className="file-input" style={{ display: 'none'}} accept="image/*" onChange={handleFileSelect} />
            </div>
        </div>
    );
}

export default ImageUpload;