import React, { useState } from "react";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import CategoryService from "../../../services/category.serviece";
// import { categoryAction } from "../../../reducers/categorySlice";

const Category = () => {
    const [params, setParams] = useState({
        page: 1,
        sort: "category-name",
        order: "asc",
        perPage: "10",
    });

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "category_name", headerName: "Category name", width: 270 },
        { field: "category_desc", headerName: "Category desc", width: 350 },
    ];

    const service = (params) => {
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
