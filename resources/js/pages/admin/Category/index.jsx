import React, { useEffect, useState } from "react";
import { MainCard } from "../../../components/shared";
import { DataGrid } from "@mui/x-data-grid";
import CategoryService from "../../../services/category.serviece";
import { set } from "lodash";
import { date } from "yup";
import { stringify } from "postcss";
// import { categoryAction } from "../../../reducers/categorySlice";

const Category = () => {
    // /api/categories?page=1&sort=category-name&order=asc
    const [dataCategory, setDataCategory] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        sort: "category-name",
        order: "asc",
        perPage: "10",
    });

    const [countPage, setCountPage] = useState(0);
    const [rowCount, setRowCount] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "category_name", headerName: "Category name", width: 200 },
        { field: "category_desc", headerName: "Category desc", width: 350 },
    ];

    useEffect(() => {
        CategoryService.getCategories(params)
            .then((res) => {
                setDataCategory(res.data.data);
                setCountPage(res.data.meta.last_page);
                setRowCount(res.data.meta.total);
                setPerPage(res.data.meta.per_page);
            })
            .catch((e) => console.log(e.response));
    }, [params]);

    const handleSortModelChange = (sortModel) => {
        // Here you save the data you need from the sort model

        setParams((prevValue) => {
            return {
                ...prevValue,
                sort: sortModel[0].field.replace("_", "-"),
                order: sortModel[0].sort,
            };
        });
    };

    const handlePageChange = (newPage) => {
        if (newPage + 1 <= countPage) {
            setParams((prevValue) => {
                return {
                    ...prevValue,
                    page: newPage + 1,
                };
            });
        }
        return;
    };

    const handlePageSizeChange = (e) => {
        setParams((prevValue) => {
            return { ...prevValue, perPage: e };
        });
    };

    return (
        <MainCard>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={dataCategory}
                    columns={columns}
                    sortingMode="server"
                    sortingOrder={["desc", "asc"]}
                    onSortModelChange={handleSortModelChange}
                    pagination
                    pageSize={perPage === 0 ? 10 : perPage}
                    paginationMode="server"
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                    rowCount={rowCount}
                    checkboxSelection
                />
            </div>
        </MainCard>
    );
};

export default Category;
