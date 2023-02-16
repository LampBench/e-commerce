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

    return (
        <MainCard title="User list">
            <DataTable
                columns={usersColumns}
                params={params}
                setParams={setParams}
                service={service}
            ></DataTable>
        </MainCard>
    );
}

export default withPermission("users", "view")(User);
