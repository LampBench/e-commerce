import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function DataTable(props) {
    const handleSortModelChange = (sortModel) => {
        props.setParams((prevValue) => {
            return {
                ...prevValue,
                sort: sortModel[0].field.replace("_", "-"),
                order: sortModel[0].sort,
            };
        });
    };

    const handlePageChange = (newPage) => {
        if (newPage + 1 <= props.countPage) {
            props.setParams((prevValue) => {
                return {
                    ...prevValue,
                    page: newPage + 1,
                };
            });
        }
        return;
    };

    const handlePageSizeChange = (e) => {
        props.setParams((prevValue) => {
            return { ...prevValue, perPage: e };
        });
    };

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={props.data}
                columns={props.columns}
                sortingMode="server"
                sortingOrder={["desc", "asc"]}
                onSortModelChange={handleSortModelChange}
                pagination
                pageSize={props.perPage === 0 ? 10 : props.perPage}
                paginationMode="server"
                rowsPerPageOptions={[5, 10, 20]}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                rowCount={props.rowCount}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable;
