import React, { memo, useCallback, useEffect, useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import UserService from '../../../services/user.service';
import { usersColumns } from "../../../constants/shared/columns/users.columns.constant";
import AlertDialog from "../../../components/shared/AlertDialog";

function User() {
    const [params, setParams] = useState({
        page: 1,
        sort: "first-name",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const [open, setOpen] = useState(false);
    const [id, setId] = useState();
    const [isDelete, setIsDelete] = useState(false);

    const service = (params) => {
        return UserService.getUsers(params);
    };

    // useEffect(() => {
    //     if (isDelete) {
    //         DiscountService.deleteCategory(id)
    //             .then((res) => {
    //                 setIsDelete(false);
    //                 setOpen(false);
    //             })
    //             .catch(() => {
    //                 setIsDelete(false);
    //                 setOpen(false);
    //             });
    //     }
    // }, [isDelete]);

    return (
        <MainCard title="User list">
            <AlertDialog
                open={open}
                setOpen={setOpen}
                setIsDelete={setIsDelete}
            />
            <DataTable
                columns={usersColumns}
                params={params}
                setParams={setParams}
                service={service}
                isDelete={isDelete}
                setId={setId}
                setOpen={setOpen}
            />
        </MainCard>
    );
}

export default withPermission("users", "view")(User);