import * as Yup from 'yup';

export const userFormItems = [
    {
        label: 'Fisrt Name',
        name: 'first_name',
        type: 'text',
        placeholder: 'Enter first name',
        rangeLength: 50,
        rules: Yup.string()
                .required('First name is required')
                .max(50, 'First name must be less than 50 characters')
                .min(3, 'First name must be more than 3 characters'),
    },
    {
        label: 'Last Name',
        name: 'last_name',
        type: 'text',
        placeholder: 'Enter last name',
        rangeLength: 50,
        rules: Yup.string()
                .required('Last name is required')
                .max(50, 'Last name must be less than 50 characters')
                .min(3, 'Last name must be more than 3 characters'),
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'Enter email',
        rangeLength: 255,
        rules: Yup.string()
                .required('Email is required')
                .email('Email is invalid')
                .max(255, 'Email must be less than 255 characters')
                .min(3, 'Email must be more than 3 characters'),
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password',
        placeholder: 'Enter password',
        rangeLength: 255,
        rules: Yup.string()
                .required('Password is required')
                .max(255, 'Password must be less than 255 characters')
                .min(3, 'Password must be more than 6 characters'),
    },
    {
        label: 'Confirm Password',
        name: 'password_confirmation',
        type: 'password',
        placeholder: 'Enter confirm password',
        rangeLength: 255,
        rules: Yup.string()
                .required('Confirm password is required')
                .max(255, 'Confirm password must be less than 255 characters')
                .min(3, 'Confirm password must be more than 6 characters')
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    },
    {
        label: 'Role',
        name: 'role',
        type: 'select',
        placeholder: 'Select role',
        isEdit: false,
        options: [
            {
                value: 'admin',
                text: 'Admin',
            },
            {
                value: 'user',
                text: 'User',
            },
        ],
        rules: Yup.string()
                .required('Role is required'),
    },
];
