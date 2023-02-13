import { getGridStringOperators } from "@mui/x-data-grid";

const filterOperators = getGridStringOperators().filter(({ value }) =>
    ["contains" /* add more over time */].includes(value)
);

export const manufacturersColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 50,
        filterOperators
    },
    {
        field: "name",
        headerName: "Name",
        width: 200,
        filterOperators
    },
    {
        field: "phone_number",
        headerName: "Phone number",
        width: 150,
        filterOperators
    },
    {
        field: "email",
        headerName: "Email",
        width: 200,
        filterOperators
    },
    {
        field: "address",
        headerName: "Address",
        width: 200,
        filterOperators
    },
];