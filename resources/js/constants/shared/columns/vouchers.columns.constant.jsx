import { getGridStringOperators } from "@mui/x-data-grid";

const filterOperators = getGridStringOperators().filter(({ value }) =>
    ["contains" /* add more over time */].includes(value)
);

export const vouchersColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 100,
        filterOperators
    },
    {
        field: "title",
        headerName: "Title",
        width: 300,
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
        field: "status",
        headerName: "Status",
        width: 150,
        filterOperators,
        valueGetter: (params) =>
            `${params.row.status === '1' ? 'Active' : 'Inactive'
            }`,
    },
];