import React from "react";
import { useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import { MainCard } from "../../../components/shared";
import UserService from "../../../services/user.service";
import DataTable from "../../../components/shared/DataTable";
import { usersColumns } from "../../../constants/shared/columns/users.columns.constant";
import { DeleteForeverRounded, Edit } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

function User() {
    const [params, setParams] = useState({
        page: 1,
        sort: "first-name",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const service = (params) => {
        return UserService.getUsers(params);
    };

    const actions = [
        {
            field: "actions",
            headerName: "",
            width: 150,
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton aria-label="update" size="large">
                            <Edit fontSize="medium" />
                        </IconButton>
                        <IconButton aria-label="delete" size="large">
                            <DeleteForeverRounded fontSize="medium" />
                        </IconButton>
                    </>
                );
            },
        },
    ];

    return (
        <MainCard title="User list">
            <DataTable
                columns={[...usersColumns, ...actions]}
                params={params}
                setParams={setParams}
                service={service}
            ></DataTable>
        </MainCard>
    );
}

export default withPermission("users", "view")(User);
