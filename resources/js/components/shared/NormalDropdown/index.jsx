import React from "react";
import { Badge } from "@mui/material";
import { Dropdown, DropdownButton } from "react-bootstrap";
import './style.scss';

function NormalDropdown({ item, setAPIParams, checkShow, setCheckShow }) {

    const checkAll = (id, checkShowId) => {
        if (id === "all" || checkShowId.length === item.values.length) {
            return [];
        }
        return checkShowId;
    }

    const handleClickItem = (id) => {
        let checkShowId = checkShow;
        if (item.multiple) {
            if (checkShowId.includes(id)) {
                checkShowId.splice(checkShowId.indexOf(id), 1)
            }
            else {
                checkShowId.push(id)
            }
            setAPIParams(checkAll(id, checkShowId), item, setCheckShow);
        }
        else {
            setAPIParams([id], item, setCheckShow);
        }
    }

    return (
        <div id="normal-dropdown">
            {item.multiple && <Badge color="secondary" badgeContent={checkShow.length}>
                <DropdownButton id="dropdown-item-button" title={item.show}>
                    <Dropdown.Item as="button"
                        active={checkShow.length === 0}
                        key={item.field + "_all"}
                        onClick={() => handleClickItem("all")}>
                        {"All"}
                    </Dropdown.Item>
                    {item.values.map((value) => {
                        return (
                            <Dropdown.Item as="button"
                                active={checkShow.includes(value.id)}
                                key={item.field + "_" + value.id}
                                onClick={() => handleClickItem(value.id)}>
                                {value.name}
                            </Dropdown.Item>
                        );
                    })}
                </DropdownButton>
            </Badge>}
            {!item.multiple &&
                <DropdownButton id="dropdown-item-button" title={item.show}>
                    {item.values.map((value) => {
                        return (
                            <Dropdown.Item as="button"
                                active={checkShow.includes(value.id)}
                                key={item.field + "_" + value.id}
                                onClick={() => handleClickItem(value.id)}>
                                {value.name}
                            </Dropdown.Item>
                        );
                    })}
                </DropdownButton>}
        </div>
    );
}

export default NormalDropdown;