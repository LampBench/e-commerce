import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { TreeSelect } from "primereact/treeselect";
import { useState } from "react";
import { set } from "lodash";

const SelectTree = ({ dataTrans, setIDParent }) => {
    const [value, setValue] = useState(null);

    return (
        <TreeSelect
            value={value}
            onChange={(e) => {
                setValue(e.value);
                setIDParent(e.value.split("-").slice(-1));
            }}
            options={dataTrans}
            selectionMode="single"
            placeholder="Select Category"
            style={{
                width: "100%",
                borderRadius: "0.5rem",
                backgroundColor: "#F8FAFC",
                font: "inherit",
            }}
        />
    );
};
export default SelectTree;
