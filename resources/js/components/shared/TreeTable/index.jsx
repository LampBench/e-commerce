import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";

const getTreeDataPath = (row) => row.hierarchy;

export default function TreeData({ rows, columns, params, service }) {
    const [data, setData] = React.useState([]);
    // const [obj, setObj] = React.useState({
    //     hierarchy: [],
    //     id: "",
    //     name: "",
    //     description: "",
    // });

    const row = (obj) => {
        setData((prevValue) => {
            return [...prevValue, [obj]];
        });
    };

    // const recursion = (data) => {
    //     rows = [];
    //     if (data.length === 0) {
    //         return false;
    //     }
    //     for (let i = 0; i < data.length; i++) {
    //         rows.push(};
    //     }
    // };

    React.useEffect(() => {
        service(params)
            .then((res) => {
                recursion(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                //
            });
    }, []);
    console.log(data);
    return (
        <div style={{ height: 400, width: "100%" }}>
            {/* <DataGridPro
                treeData
                rows={rows}
                columns={columns}
                getTreeDataPath={getTreeDataPath}
            /> */}
        </div>
    );
}
