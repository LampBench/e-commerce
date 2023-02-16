import React from "react";
import { useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import { MainCard } from "../../../components/shared";
import VoucherService from "../../../services/voucher.service";
import DataTable from "../../../components/shared/DataTable";
import { vouchersColumns } from "../../../constants/shared/columns/vouchers.columns.constant";
import { DeleteForeverRounded, Edit } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

function Voucher() {
    const [params, setParams] = useState({
        page: 1,
        sort: "product-id",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const service = (params) => {
        return VoucherService.getVouchers(params);
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
        <MainCard title="Voucher list">
            <DataTable
                columns={[...vouchersColumns, ...actions]}
                params={params}
                setParams={setParams}
                service={service}
            ></DataTable>
        </MainCard>
    );
}

export default withPermission("vouchers", "view")(Voucher);
