import { getGridStringOperators } from "@mui/x-data-grid";

const filterOperators = getGridStringOperators().filter(({ value }) =>
    ["contains" /* add more over time */].includes(value)
);

export const authorsColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 100,
        filterOperators
    },
    {
        field: "author_name",
        headerName: "Author name",
        width: 300,
        filterOperators
    },
    {
        field: "author_bio",
        headerName: "Author bio",
        width: 300,
        filterOperators
    },
];