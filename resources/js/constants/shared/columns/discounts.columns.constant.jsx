import { getGridStringOperators } from "@mui/x-data-grid";

const filterOperators = getGridStringOperators().filter(({ value }) =>
    ["contains" /* add more over time */].includes(value)
);

export const discountsColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 50,
        filterOperators
    },
    {
        field: "product_id",
        headerName: "Product ID",
        width: 100,
        filterOperators
    },
    {
        field: "product_name",
        headerName: "Product name",
        width: 300,
        filterOperators
    },
    {
        field: "product_quantity",
        headerName: "Product quantity",
        width: 150,
        filterOperators
    },
    {
        field: "start_date",
        headerName: "Start date",
        width: 150,
        filterOperators
    },
    {
        field: "end_date",
        headerName: "End date",
        width: 150,
        filterOperators
    },
    {
        field: "value",
        headerName: "Value",
        width: 150,
        filterOperators
    },
    {
        field: "type",
        headerName: "Type",
        width: 150,
        filterOperators,
        valueGetter: (params) =>
            `${params.row.type === '1' ? 'Fixed amount' : 'Percentage'
            }`,
    },
    {
        field: "discount_amount",
        headerName: "Discount amount",
        width: 150,
        filterOperators
    },
];