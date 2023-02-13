import { getGridStringOperators } from "@mui/x-data-grid";

const filterOperators = getGridStringOperators().filter(({ value }) =>
    ["contains" /* add more over time */].includes(value)
);

export const usersColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 100,
        filterOperators
    },
    {
        field: "full_name",
        headerName: "Full name",
        width: 300,
        filterOperators
    },
    {
        field: "email",
        headerName: "Email",
        width: 300,
        filterOperators
    },
    {
        field: "group_name",
        headerName: "Group",
        width: 100,
        filterOperators,
        valueGetter: (params) =>
            `${params.row.group_name.charAt(0).toUpperCase() +
            params.row.group_name.slice(1)
            }`,
    },
];