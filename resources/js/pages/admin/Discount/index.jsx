import React, { memo, useCallback, useEffect, useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import DiscountService from "../../../services/discount.service";
import { discountsColumns } from "../../../constants/shared/columns/discounts.columns.constant";
import AlertDialog from "../../../components/shared/AlertDialog";

function Discount() {
    const [params, setParams] = useState({
        page: 1,
        sort: "product-id",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const [open, setOpen] = useState(false);
    const [id, setId] = useState();
    const [isDelete, setIsDelete] = useState(false);

    const service = (params) => {
        return DiscountService.getDiscounts(params);
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
        <MainCard title="Discount list">
            <AlertDialog
                open={open}
                setOpen={setOpen}
                setIsDelete={setIsDelete}
            />
            <DataTable
                columns={discountsColumns}
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

export default withPermission("discounts", "view")(Discount);
