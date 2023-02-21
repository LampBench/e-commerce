import React from "react";
import {
    TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DateTimePicker as DTP } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export default function DateTimePicker(props) {
    const { name, label, value, handleChange, onBlur, error = null, ...other } = props;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DTP
                id={name}
                label={label}
                renderInput={(params) => {
                    return (
                        <TextField
                            {...params}
                            error={error !== null}
                            helperText={error}
                        />
                    );
                }}
                value={value}
                name={name}
                onChange={(newValue) => {
                    console.log("Debug newValue", newValue);
                    handleChange(name, newValue);
                }}
                onBlur={onBlur}
            />
        </LocalizationProvider>
    );
}