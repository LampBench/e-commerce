import { getGridStringOperators } from "@mui/x-data-grid";

const filterOperators = getGridStringOperators().filter(({ value }) =>
    ["contains" /* add more over time */].includes(value)
);

export const productStatusNameList = {
    '1': 'Available',
    '2': 'Not available',
    '3': 'Coming soon'
}

export const productsColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 50,
        filterOperators
    },
    {
        field: "name",
        headerName: "Name",
        width: 300,
        filterOperators
    },
    {
        field: "category_name",
        headerName: "Category name",
        width: 300,
        filterOperators,
        valueGetter: (params) =>
            `${params.row.category_name.charAt(0).toUpperCase() +
            params.row.category_name.slice(1)
            }`,
    },
    {
        field: "manufacturer_name",
        headerName: "Manufacturer name",
        width: 300,
        filterOperators
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        filterOperators,
        valueGetter: (params) =>
            `${productStatusNameList[params.row.status]}`,
    },
    {
        field: "quantity",
        headerName: "Quantity",
        width: 100,
        filterOperators
    },
    {
        field: "discount_amount",
        headerName: "Discount amount",
        width: 100,
        filterOperators
    },
    {
        field: "final_price",
        headerName: "Final price",
        width: 100,
        filterOperators
    },
    {
        field: "average_rating_star",
        headerName: "Average rating star",
        width: 100,
        filterOperators
    },
    {
        field: "number_of_reviews",
        headerName: "Number of reviews",
        width: 100,
        filterOperators
    },
];