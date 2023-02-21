import React from "react";
import {
    Checkbox,
    Select,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

function MultiSelect(props) {
    const theme = useTheme();
    const { name, label, value, handleChange, options, onBlur, id } = props;

    const handleChangeSelect = (event) => {
        console.log("Debug event", event.target);
        const selfValue = event.target.value;
        console.log("Debug value", selfValue);
        handleChange(name, selfValue);
    };

    console.log("Debug options", value);

    return (
        <Select
            id={name}
            multiple
            value={value}
            onChange={handleChangeSelect}
            onBlur={onBlur}
            label={label}
            renderValue={(selected) => {
                return selected.map((value) => {
                    const option = options.find((option) => option.value === value);
                    return option.label;
                }).join(", ");
            }}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    <Checkbox checked={value.indexOf(option.value) > -1} />
                    <ListItemText primary={option.label} />
                </MenuItem>
            ))}
        </Select>
    );
}

export default MultiSelect;
