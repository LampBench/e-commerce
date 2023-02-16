import * as Yup from 'yup';

export const manufacturerFormItems = [
    {
        label: 'Manufacturer name',
        name: 'name',
        type: 'text',
        placeholder: 'Enter manufacturer name',
        rangeLength: 50,
        rules: Yup.string()
            .required('Manufacturer name is required')
            .max(50, 'Manufacturer name must be less than 50 characters')
            .min(3, 'Manufacturer name must be more than 3 characters'),
    },
    {
        label: 'Manufacturer description',
        name: 'description',
        type: 'text',
        placeholder: 'Enter manufacturer description',
        rangeLength: 255,
        rules: Yup.string()
            .max(255, 'Manufacturer description must be less than 255 characters')
            .min(3, 'Manufacturer descriptions must be more than 3 characters')
    },
    {
        label: 'Manufacturer phone number',
        name: 'phone_number',
        type: 'text',
        placeholder: 'Enter manufacturer phone number',
        rangeLength: 50,
        rules: Yup.string()
            .max(50, 'Manufacturer phone number must be less than 50 characters')
            .min(3, 'Manufacturer phone number must be more than 3 characters')
    },
    {
        label: 'Manufacturer email',
        name: 'email',
        type: 'text',
        placeholder: 'Enter manufacturer email',
        rangeLength: 512,
        rules: Yup.string()
            .email('Manufacturer email is invalid')
            .max(512, 'Manufacturer email must be less than 50 characters')
            .min(3, 'Manufacturer email must be more than 3 characters')
    },
    {
        label: 'Manufacturer address',
        name: 'address',
        type: 'text',
        placeholder: 'Enter manufacturer address',
        rangeLength: 255,
        rules: Yup.string()
            .max(255, 'Manufacturer address must be less than 255 characters')
            .min(3, 'Manufacturer address must be more than 3 characters')
    },
    {
        label: 'Manufacturer type',
        name: 'type',
        type: 'select',
        placeholder: 'Select manufacturer type',
        options: [
            { value: 1, text: 'Bussiness' },
            { value: 2, text: 'Personal' },
        ],
        rules: Yup.string()
            .required('Manufacturer type is required')
    },
];
