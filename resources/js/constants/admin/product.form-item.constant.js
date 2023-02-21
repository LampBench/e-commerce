export const productFormItems = [
    {
        label: 'Product name',
        name: 'name',
        type: 'text',
        placeholder: 'Enter product name',
        rangeLength: 50,
        rules: {
            required: { value: true, message: 'Product name is required'},
            max: { value: 50, message: 'Product name must be less than 50 characters'},
            min: { value: 3, message: 'Product name must be more than 3 characters'}
        }
    },
    {
        label: 'Product summary',
        name: 'summary',
        type: 'text',
        placeholder: 'Enter product summary',
        rangeLength: 255,
        rules: {
            max: { value: 255, message: 'Product summary must be less than 255 characters'},
            min: { value: 3, message: 'Product summary must be more than 3 characters'}
        }
    },
    {
        label: 'Product type',
        name: 'type',
        type: 'select',
        placeholder: 'Select product type',
        rangeLength: 50,
        options: [
            {
                label: "Product type 1",
                value: 1,
            },
            {
                label: "Product type 2",
                value: 2,
            },
            {
                label: "Product type 3",
                value: 3,
            },
        ],
        rules: {
            required: { value: true, message: 'Product type is required'},
        }
    },
    {
        label: 'Product price',
        name: 'price',
        type: 'number',
        placeholder: 'Enter product price',
        rangeLength: 50,
        rules: {
            required: { value: true, message: 'Product price is required'},
        }
    },
    {
        label: 'Product quantity',
        name: 'quantity',
        type: 'number',
        placeholder: 'Enter product quantity',
        rangeLength: 50,
        rules: {
            required: { value: true, message: 'Product quantity is required'},
        }
    },
];