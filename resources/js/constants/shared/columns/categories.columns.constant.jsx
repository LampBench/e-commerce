import { getGridStringOperators } from "@mui/x-data-grid";

const filterOperators = getGridStringOperators().filter(({ value }) =>
    ["contains" /* add more over time */].includes(value)
);

export const categoriesColumns = [
    { field: "id", headerName: "ID", width: 100, filterOperators },
    {
        field: "category_name",
        headerName: "Category name",
        width: 270,
        filterOperators,
        valueGetter: (params) =>
            `${params.row.category_name.charAt(0).toUpperCase() +
            params.row.category_name.slice(1)
            }`,
    },
    {
        field: "category_desc",
        headerName: "Category desc",
        width: 350,
        filterOperators,
    },
];
