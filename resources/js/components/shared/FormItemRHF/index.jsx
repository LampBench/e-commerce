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

import { useTheme } from "@mui/material/styles";

function FormItemRHF(props) {
    const theme = useTheme();
    const {
        name,
        label,
        type,
        register,
        errors,
        rules,
        value
    } = props;

    const handleDataChild = (type) => {
        switch (type) {
            case 'text':
            case 'password':
            case 'email':
                return (
                    <OutlinedInput
                        id={name}
                        name={name}
                        type={type}
                        {...register(name, rules)}
                        label={label}
                        defaultValue={value || ''}
                        endAdornment={
                            type === 'password' ? (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>
                            ) : null
                        }

                    />
                );
            case 'select':
                return (
                    <Select
                        id={name}
                        name={name}
                        {...register(name, rules)}
                        label={label}
                    >
                        {
                            options.map((option, index) => (
                                <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                            ))
                        }
                    </Select>
                );
            default:
                return null;
        }
    }

    return (
        <FormControl
            fullWidth
            variant="outlined"
            sx={{
                mb: 2,
            }}
        >
            <InputLabel 
                id={name}
                htmlFor={name}
                sx={{
                    ...(rules.required && {
                        '&::after': {
                            content: '"*"',
                            color: theme.palette.error.main,
                            ml: 0.5,
                        }
                    })
                }}
            >{label}</InputLabel>
            {handleDataChild(type)}
            {
                errors[name] && (
                    <FormHelperText
                        sx={{
                            color: theme.palette.error.main,
                        }}
                    >
                        {errors[name].message}
                    </FormHelperText>
                )
            }
        </FormControl>
    );
}

export default FormItemRHF;