import React from "react";
import { useEffect, useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import { MainCard } from "../../../components/shared";
import UserService from "../../../services/user.service";
import DataTable from "../../../components/admin/DataTable";

function User() {
    const [data, setData] = useState([]);
    const [countPage, setCountPage] = useState(0);
    const [rowCount, setRowCount] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const [params, setParams] = useState({
        page: 1,
        sort: "first-name",
        order: "asc",
        perPage: "10",
    });

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "full_name", headerName: "Full name", width: 260 },
        { field: "email", headerName: "Email", width: 300 },
        {
            field: "role",
            headerName: "Role",
            width: 60,
            valueGetter: (params) =>
                `${
                    params.row.role.charAt(0).toUpperCase() +
                    params.row.role.slice(1)
                }`,
        },
    ];

    useEffect(() => {
        UserService.getUsers(params)
            .then((res) => {
                setData(res.data.data);
                setCountPage(res.data.meta.last_page);
                setRowCount(res.data.meta.total);
                setPerPage(res.data.meta.per_page);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params]);

    return (
        <MainCard title="User list">
            <DataTable
                data={data}
                countPage={countPage}
                perPage={perPage}
                columns={columns}
                setParams={setParams}
                rowCount={rowCount}
            ></DataTable>
        </MainCard>
    );
}

export default withPermission(["admin"])(User);
