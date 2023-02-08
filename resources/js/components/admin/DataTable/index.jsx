import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function DataTable(props) {
    return (
        <>
            {props.data && <div style={{ height: props.height, width: '100%' }}>
                <DataGrid
                    rows={props.data.data}
                    columns={props.columns}
                    pageSize={props.pageSize}
                    rowsPerPageOptions={props.rowsPerPageOptions}
                >
                </DataGrid>
            </div>}
        </>
    );
}

export default DataTable;