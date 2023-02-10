import React from "react";
import { useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import { MainCard } from "../../../components/shared";
import UserService from "../../../services/user.service";
import DataTable from "../../../components/shared/DataTable";

function User() {
    const [params, setParams] = useState({
        page: 1,
        sort: "first-name",
        order: "asc",
        perPage: "10",
    });

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "full_name", headerName: "Full name", width: 300 },
        { field: "email", headerName: "Email", width: 300 },
        {
            field: "role",
            headerName: "Role",
            width: 100,
            valueGetter: (params) =>
                `${
                    params.row.role.charAt(0).toUpperCase() +
                    params.row.role.slice(1)
                }`,
        },
    ];

    const service = (params) => {
        return UserService.getUsers(params);
    };

    return (
        <MainCard title="User list">
            <DataTable
                columns={columns}
                params={params}
                setParams={setParams}
                service={service}
            ></DataTable>
        </MainCard>
    );
}

export default withPermission("users", "view")(User);
