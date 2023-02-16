import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { transform } from "lodash";
import { categoriesColumns } from "../../../constants/shared/columns/categories.columns.constant";

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

    const customTransformedData = (data, columns) => {
        let customData = {};
        columns.forEach(column => {
            customData[column.field] = data[column.field];
        })
        return customData;
    }

    const getChildrenTransformedData = (item, currentTransformedItem, childrenTransformedData, columns) => {
        if (item.all_children.length === 0) {
            return childrenTransformedData;
        }
        let parentTransformedItem = currentTransformedItem.slice();
        item.all_children.forEach(element => {
            parentTransformedItem.push(customTransformedData(element, columns));
            let currentTransformedItem = parentTransformedItem.slice();
            childrenTransformedData.push(currentTransformedItem);
            childrenTransformedData = getChildrenTransformedData(element, currentTransformedItem, childrenTransformedData, columns);
            parentTransformedItem.pop();
        });
        return childrenTransformedData;
    }

    const getTransformedData = (data, columns) => {
        let transformedData = [];
        if (data !== []) {
            data.forEach(item => {
                let transformedItem = [customTransformedData(item, columns)]
                let childrenTransformedData = [transformedItem];
                childrenTransformedData = getChildrenTransformedData(item, transformedItem, childrenTransformedData, columns);
                transformedData = transformedData.concat(childrenTransformedData);
            })
        }
        return transformedData;
    };

    React.useEffect(() => {
        service(params)
            .then((res) => {
                let transformedData = getTransformedData(res.data.data, categoriesColumns);
                console.log(transformedData);
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
