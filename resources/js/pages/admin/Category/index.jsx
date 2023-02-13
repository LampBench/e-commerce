import React, { useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import CategoryService from "../../../services/category.service";
import { categoriesColumns } from "../../../constants/shared/columns/categories.columns.constant";
// import { categoryAction } from "../../../reducers/categorySlice";

const Category = () => {
    const [params, setParams] = useState({
        page: 1,
        sort: "category-name",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const service = (params) => {
        return CategoryService.getCategories(params);
    };

    return (
        <MainCard title="Category list">
            <DataTable
                columns={categoriesColumns}
                params={params}
                setParams={setParams}
                service={service}
            />
        </MainCard>
    );
};

export default withPermission("categories", "view")(Category);
