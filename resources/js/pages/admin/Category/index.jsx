import React, { useState } from "react";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import CategoryService from "../../../services/category.service";
// import { categoryAction } from "../../../reducers/categorySlice";
import { getGridStringOperators } from "@mui/x-data-grid";

const Category = () => {
    const [params, setParams] = useState({
        page: 1,
        sort: "category-name",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const filterOperators = getGridStringOperators().filter(({ value }) =>
        ["equals" /* add more over time */].includes(value)
    );

    const columns = [
        { field: "id", headerName: "ID", width: 100, filterOperators },
        {
            field: "category_name",
            headerName: "Category name",
            width: 270,
            filterOperators,
        },
        {
            field: "category_desc",
            headerName: "Category desc",
            width: 350,
            filterOperators,
        },
    ];

    const service = (params) => {
        if (params.search !== "")
            return CategoryService.searchCategories(params);
        return CategoryService.getCategories(params);
    };

    return (
        <MainCard title="Category list">
            <DataTable
                columns={columns}
                params={params}
                setParams={setParams}
                service={service}
            />
        </MainCard>
    );
};

export default Category;
