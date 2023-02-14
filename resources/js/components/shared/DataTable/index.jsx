import React, { useState, useEffect, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchSection from "../../../layouts/admin/Header/SearchSection";

function DataTable({ columns, params, setParams, service }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countPage, setCountPage] = useState(0);
    const [rowCount, setRowCount] = useState(0);
    const [perPage, setPerPage] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            service(params)
                .then((res) => {
                    setData(res.data.data);
                    setCountPage(res.data.meta.last_page);
                    setRowCount(res.data.meta.total);
                    setPerPage(res.data.meta.per_page);
                })
                .catch((e) => console.log(e.response));
        }, 500);
        return () => {
            setIsLoading(true);
            clearTimeout(timer);
        };
    }, [params]);

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
                    columns={columns}
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
                // filterMode="server"
                // onFilterModelChange={handleFilterChange}
                // checkboxSelection
                />
            </div>
        </>
    );
}

export default DataTable;
