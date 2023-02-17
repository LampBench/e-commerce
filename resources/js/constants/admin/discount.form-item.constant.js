import * as Yup from 'yup';

export const discountFormItems = [
    {
        label: 'Product ID',
        name: 'product_id',
        type: 'number',
        placeholder: 'Enter product ID',
    },
    {
        label: 'Type',
        name: 'type',
        type: 'select',
        placeholder: 'Select type',
        options: [
            { value: 1, text: 'Fixed' },
            { value: 2, text: 'Percent' },
        ]
    },
    {
        label: 'Value',
        name: 'value',
        type: 'number',
        placeholder: 'Enter value'
    },
    {
        label: 'Start Date',
        name: 'start_date',
        type: 'dateTimePicker',
        placeholder: 'Select start date'
    },
    {
        label: 'End Date',
        name: 'end_date',
        type: 'dateTimePicker',
        placeholder: 'Select end date'
    },
]