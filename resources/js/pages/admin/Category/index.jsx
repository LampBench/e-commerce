import React, { memo, useCallback, useEffect, useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import CategoryService from "../../../services/category.service";
import { categoriesColumns } from "../../../constants/shared/columns/categories.columns.constant";
import AlertDialog from "../../../components/shared/AlertDialog";
import { TreeTable } from "../../../components/shared";
import SearchSection from "../../../layouts/admin/Header/SearchSection";
import { toast } from "react-toastify";

// import { categoryAction } from "../../../reducers/categorySlice";

const Category = () => {
    const [params, setParams] = useState({
        page: 1,
        sort: "name",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const [open, setOpen] = useState(false);
    const [id, setId] = useState();
    const [isDelete, setIsDelete] = useState(false);

    const service = (params) => {
        return CategoryService.getCategories(params);
    };

    useEffect(() => {
        if (isDelete) {
            CategoryService.deleteCategory(id)
                .then((res) => {
                    setIsDelete(false);
                    setOpen(false);
                })
                .catch((e) => {
                    setIsDelete(false);
                    setOpen(false);
                    toast.error(e.response.data.message, {
                        autoClose: 3000,
                    });
                });
        }
    }, [isDelete]);

    return (
        <MainCard title="Category list">
            <AlertDialog
                open={open}
                setOpen={setOpen}
                setIsDelete={setIsDelete}
            />
            <SearchSection setParams={setParams} />
            <TreeTable
                columns={categoriesColumns}
                params={params}
                service={service}
                isDelete={isDelete}
                setOpen={setOpen}
                setId={setId}
            />
        </MainCard>
    );
};

export default withPermission("categories", "view")(Category);
