import React, { useEffect, useState } from "react";
import { MainCard } from "../../../components/shared";
import { DataGrid } from "@mui/x-data-grid";
import CategoryService from "../../../services/category.serviece";
// import { categoryAction } from "../../../reducers/categorySlice";

const Category = () => {
    const [dataCategory, setDataCategory] = useState([]);
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "category_name", headerName: "Category name", width: 200 },
        { field: "category_desc", headerName: "Category desc", width: 350 },
    ];

    useEffect(() => {
        CategoryService.getCategories()
            .then((res) => {
                console.log(res.data.data);
                setDataCategory(res.data.data);
            })
            .catch((e) => console.log(e.response));
    }, []);

    return (
        <MainCard>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={dataCategory}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </MainCard>
    );
};

export default Category;
