import { getGridStringOperators } from "@mui/x-data-grid";

const filterOperators = getGridStringOperators().filter(({ value }) =>
    ["contains" /* add more over time */].includes(value)
);

export const categoriesColumns = [
    { field: "id", headerName: "ID", width: 100, filterOperators },
    {
        field: "name",
        headerName: "Name",
        width: 270,
        filterOperators,
        valueGetter: (params) =>
            `${
                params.row.name.charAt(0).toUpperCase() +
                params.row.name.slice(1)
            }`,
    },
    {
        field: "description",
        headerName: "Description",
        width: 350,
        filterOperators,
    },
];
