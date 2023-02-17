import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { categoriesColumns } from "../../../constants/shared/columns/categories.columns.constant";
import {
    DeleteForeverRounded,
    DragHandleRounded,
    Edit,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const getTreeDataPath = (row) => row.hierarchy;

export default function TreeData({
    columns,
    params,
    service,
    isDelete,
    setOpen,
    setId,
}) {
    const [data, setData] = React.useState([]);

    const customTransformedData = (data, columns) => {
        let customData = {};
        columns.forEach((column) => {
            customData[column.field] = data[column.field];
        });
        return customData;
    };

    const getChildrenTransformedData = (
        item,
        currentTransformedItem,
        childrenTransformedData,
        columns
    ) => {
        if (item.all_children.length === 0) {
            return childrenTransformedData;
        }
        let parentTransformedItem = currentTransformedItem.slice();
        item.all_children.forEach((element) => {
            parentTransformedItem.push(customTransformedData(element, columns));
            let currentTransformedItem = parentTransformedItem.slice();
            childrenTransformedData.push(currentTransformedItem);
            childrenTransformedData = getChildrenTransformedData(
                element,
                currentTransformedItem,
                childrenTransformedData,
                columns
            );
            parentTransformedItem.pop();
        });
        return childrenTransformedData;
    };

    const getTransformedData = (data, columns) => {
        let transformedData = [];
        if (data !== []) {
            data.forEach((item) => {
                let transformedItem = [customTransformedData(item, columns)];
                let childrenTransformedData = [transformedItem];
                childrenTransformedData = getChildrenTransformedData(
                    item,
                    transformedItem,
                    childrenTransformedData,
                    columns
                );
                transformedData = transformedData.concat(
                    childrenTransformedData
                );
            });
        }
        return transformedData;
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

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

    React.useEffect(() => {
        const timer = setTimeout(() => {
            service(params)
                .then((res) => {
                    let transformedData = getTransformedData(
                        res.data.data,
                        categoriesColumns
                    );

                    transformedData.forEach((element, index) => {
                        setData((prevValue) => {
                            return [
                                ...prevValue,
                                {
                                    id: element.slice(-1)[0].id,
                                    hierarchy: element.map((e) =>
                                        capitalizeFirstLetter(e.name)
                                    ),
                                    name: capitalizeFirstLetter(
                                        element.slice(-1)[0].name
                                    ),
                                    description:
                                        element.slice(-1)[0].description,
                                },
                            ];
                        });
                    });
                })
                .catch((e) => {
                    //
                })
                .finally(() => {
                    //
                });
        }, 500);
        return () => {
            setData([]);
            clearTimeout(timer);
        };
    }, [params, isDelete]);

    return (
        <>
            <div style={{ height: 400, width: "100%" }}>
                {data.length !== 0 && (
                    <DataGridPro
                        treeData
                        rows={data}
                        columns={[...columns, ...actions]}
                        getTreeDataPath={getTreeDataPath}
                        onSelectionModelChange={(item) => setId(item[0])}
                    />
                )}
            </div>
        </>
    );
}
