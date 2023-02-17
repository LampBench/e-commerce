import React, { memo, useCallback, useEffect, useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import ProductService from '../../../services/product.service';
import { productsColumns } from "../../../constants/shared/columns/products.columns.constant";
import AlertDialog from "../../../components/shared/AlertDialog";

function Product() {
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
        return ProductService.getProducts(params);
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
        <MainCard title="Product list">
            <AlertDialog
                open={open}
                setOpen={setOpen}
                setIsDelete={setIsDelete}
            />
            <DataTable
                columns={productsColumns}
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

export default withPermission("products", "view")(Product);