import React from "react";
import { useEffect, useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import { MainCard } from "../../../components/shared";
import UserService from "../../../services/user.service";
import DataTable from "../../../components/admin/DataTable";

function User() {
    const [data, setData] = useState(null);
    const pageSize = 10;
    const rowsPerPageOptions = [5, 10, 15];
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'full_name', headerName: 'Full name', width: 260 },
        { field: 'email', headerName: 'Email', width: 300 },
        {
            field: 'role', headerName: 'Role', width: 60,
            valueGetter: (params) =>
                `${params.row.role.charAt(0).toUpperCase() + params.row.role.slice(1)}`,
        },
    ];

    useEffect(() => {
        UserService.getUsers()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    return (
        <MainCard title='User list'>
            <DataTable
                data={data}
                columns={columns}
                height={400}
                pageSize={pageSize}
                rowsPerPageOptions={rowsPerPageOptions}
            ></DataTable>
        </MainCard>
    );
}

export default withPermission(['admin'])(User);