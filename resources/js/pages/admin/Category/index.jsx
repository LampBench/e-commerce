import React, { useEffect, useState } from "react";

import CategoryService from "../../../services/category.serviece";
import DataTable from "../../../components/admin/DataTable";
import { MainCard } from "../../../components/shared";
import userService from "../../../services/user.service";
// import { categoryAction } from "../../../reducers/categorySlice";

const Category = () => {
    const [data, setData] = useState([]);
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
        userService
            .getUsers(params)
            .then((res) => {
                setData(res.data.data);
                setCountPage(res.data.meta.last_page);
                setRowCount(res.data.meta.total);
                setPerPage(res.data.meta.per_page);
            })
            .catch((e) => console.log(e.response));
    }, [params]);

    return (
        <MainCard>
            <DataTable
                data={data}
                countPage={countPage}
                perPage={perPage}
                columns={columns}
                setParams={setParams}
                rowCount={rowCount}
            />
        </MainCard>
    );
};

export default Category;
