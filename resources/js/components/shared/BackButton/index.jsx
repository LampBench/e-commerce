import React from "react";
import {
    Button
} from '@mui/material';
import {
    ArrowBack
} from '@mui/icons-material';

export default function BackButton({text, navigator}) {
    return (
        <Button
            onClick={
                () => navigator(-1)
            }
            startIcon={<ArrowBack />}
            size="large"
        >
            {text}
        </Button>
    );
}