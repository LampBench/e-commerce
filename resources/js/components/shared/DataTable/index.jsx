import React, { useState, useEffect, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchSection from "../../../layouts/admin/Header/SearchSection";
import {
    DeleteForeverRounded,
    DragHandleRounded,
    Edit,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

function DataTable({
    columns,
    params,
    setParams,
    service,
    isDelete,
    setId,
    setOpen,
}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countPage, setCountPage] = useState(0);
    const [rowCount, setRowCount] = useState(0);
    const [perPage, setPerPage] = useState(0);

    const ActionItems = () => {
        return (
            <>
                <IconButton aria-label="update" size="large" disabled>
                    <Edit fontSize="medium" />
                </IconButton>
                <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={handleopenDialog}
                >
                    <DeleteForeverRounded fontSize="medium" />
                </IconButton>
            </>
        );
    };

    const actions = [
        {
            field: "actions",
            headerName: "",
            width: 150,
            sortable: false,
            renderCell: ActionItems,
        },
    ];

    const handleopenDialog = () => {
        setOpen(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            service(params)
                .then((res) => {
                    setData(res.data.data);
                    setCountPage(res.data.meta.last_page);
                    setRowCount(res.data.meta.total);
                    setPerPage(res.data.meta.per_page);
                    setIsLoading(false);
                })
                .catch((e) => console.log(e.response));
        }, 500);
        return () => {
            setIsLoading(true);
            clearTimeout(timer);
        };
    }, [params, isDelete]);

    const handleSortModelChange = (sortModel) => {
        setParams((prevValue) => {
            return {
                ...prevValue,
                sort: sortModel[0].field.replace("_", "-"),
                order: sortModel[0].sort,
            };
        });
    };

    const handlePageChange = (newPage) => {
        if (newPage + 1 <= countPage) {
            setParams((prevValue) => {
                return {
                    ...prevValue,
                    page: newPage + 1,
                };
            });
        }
        return;
    };

    const handlePageSizeChange = (e) => {
        setParams((prevValue) => {
            return { ...prevValue, perPage: e };
        });
    };

    // const handleFilterChange = (filter) => {
    //     setParams(() => {});
    // };

    return (
        <>
            <SearchSection setParams={setParams} />
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={data}
                    columns={[...columns, ...actions]}
                    sortingMode="server"
                    sortingOrder={["desc", "asc"]}
                    onSortModelChange={handleSortModelChange}
                    loading={isLoading}
                    page={params.page - 1}
                    pagination
                    pageSize={perPage === 0 ? 10 : perPage}
                    paginationMode="server"
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                    rowCount={rowCount}
                    onSelectionModelChange={(item) => setId(item[0])}
                    // filterMode="server"
                    // onFilterModelChange={handleFilterChange}
                    // checkboxSelection
                />
            </div>
        </>
    );
}

export default DataTable;
