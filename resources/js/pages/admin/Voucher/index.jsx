import React, { memo, useCallback, useEffect, useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import VoucherService from '../../../services/voucher.service';
import { vouchersColumns } from "../../../constants/shared/columns/vouchers.columns.constant";
import AlertDialog from "../../../components/shared/AlertDialog";

function Voucher() {
    const [params, setParams] = useState({
        page: 1,
        sort: "title",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const [open, setOpen] = useState(false);
    const [id, setId] = useState();
    const [isDelete, setIsDelete] = useState(false);

    const service = (params) => {
        return VoucherService.getVouchers(params);
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
        <MainCard title="Voucher list">
            <AlertDialog
                open={open}
                setOpen={setOpen}
                setIsDelete={setIsDelete}
            />
            <DataTable
                columns={vouchersColumns}
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

export default withPermission("vouchers", "view")(Voucher);