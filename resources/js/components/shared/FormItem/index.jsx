import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    Typography,
    Select,
    MenuItem,
    IconButton,
    FormHelperText,
} from "@mui/material";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useTheme } from "@mui/material/styles";

function FormItem(props) {
    const theme = useTheme();
    const {
        name,
        label,
        type,
        value,
        show,
        handleChange,
        handleBlur,
        rangeLength,
        options,
        isEdit,
        setShowPassword,
        showPassword,
        errors,
        touched,
    } = props;

    console.log('Debug render 2');

    const handleDataChild = (type) => {
        switch (type) {
            case 'text':
            case 'password':
            case 'email':
                return (
                    <OutlinedInput
                        id={name}
                        name={name}
                        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label={label}
                        endAdornment={
                            (
                                <InputAdornment position="end">
                                    {
                                        type === 'password' ? (
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                onMouseDown={(event) => event.preventDefault()}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        ) : (
                                            rangeLength && (
                                                <Typography variant="body2" color="text.secondary">
                                                    {value !== undefined ? value.length : 0} / {rangeLength}
                                                </Typography>
                                            )
                                        )
                                    }
                                </InputAdornment>
                            )
                        }
                        disabled={isEdit ? true : false}
                        inputProps={{
                            autoComplete: 'new-password',
                            form: {
                                autoComplete: 'off',
                            },
                        }}
                    />
                );
            case 'select':
                return (
                    <Select
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label={label}
                        disabled={isEdit ? true : false}
                    >
                        {
                            options.map((option, index) => {
                                return (
                                    <MenuItem key={index} value={option.value}>
                                        {option.text}
                                    </MenuItem>
                                );
                            })
                        }
                    </Select>
                );
            default:
                break;
        }
    }

    return (
        <FormControl fullWidth error={Boolean(touched[name] && errors[name])}>
            <InputLabel htmlFor={name + "_id"}>{label}</InputLabel>
            {handleDataChild(type)}
            {
                errors[name] && touched[name] && (
                    <FormHelperText error={true}>
                        {errors[name]}
                    </FormHelperText>
                )
            }
        </FormControl>
    );
}

export default FormItem;