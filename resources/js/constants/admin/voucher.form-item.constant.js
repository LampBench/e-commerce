import * as Yup from 'yup';

export const voucherFormItems = [
    {
        label: 'Title',
        name: 'title',
        type: 'text',
        placeholder: 'Enter voucher title',
    },
    {
        label: 'Description',
        name: 'description',
        type: 'text',
        placeholder: 'Enter voucher description'
    },
    {
        label: 'Code',
        name: 'code',
        type: 'randomString',
        placeholder: 'Enter or click button for random code'
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
        label: 'Scope',
        name: 'scope',
        type: 'multiSelect',
        placeholder: 'Select scope',
        options: [
            { value: 'global', label: 'Global' },
            { value: 'user', label: 'User' },
            { value: 'product', label: 'Product' },
            { value: 'category', label: 'Category' },
        ]
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
    {
        label: 'Limit',
        name: 'limit',
        type: 'number',
        placeholder: 'Enter limit'
    },
    {
        label: 'Status',
        name: 'status',
        type: 'select',
        placeholder: 'Select status',
        options: [
            { value: 1, text: 'Active' },
            { value: 0, text: 'Inactive' },
        ]
    }
]