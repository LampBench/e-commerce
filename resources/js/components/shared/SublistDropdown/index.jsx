import { Badge } from "@mui/material";
import React from "react";
import { DropdownButton, Button } from "react-bootstrap";
import './style.scss';

function SublistDropdown({ item, setAPIParams, checkShow, setCheckShow }) {

    const checkActive = (id) => {
        if (id === "all") {
            return checkShow.length === 0 ? "active" : "inactive";
        }
        return checkShow.includes(id) ? "active" : "inactive";
    }

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
        <div id="sublist-dropdown">
            {item.multiple && <Badge color="secondary" badgeContent={checkShow.length}>
                <DropdownButton id="dropdown-item-button" title={item.show}>
                    <div className="row sublist-menu">
                        <div className={"col-lg-3 col-md-4 col-sm-6 sublist-menu-item"} key={item.field + "_all"}>
                            <Button
                                className={checkActive("all")}
                                onClick={() => handleClickItem("all")}
                            >
                                All
                            </Button>
                        </div>
                        {item.values.map((value) => {
                            return (
                                <div className={"col-lg-3 col-md-4 col-sm-6 sublist-menu-item"} key={item.field + "_" + value.id}>
                                    <Button
                                        className={checkActive(value.id)}
                                        onClick={() => handleClickItem(value.id)}
                                    >
                                        {value.name}
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </DropdownButton>
            </Badge>}
            {!item.multiple &&
                <DropdownButton id="dropdown-item-button" title={item.show}>
                    <div className="row sublist-menu">
                        {item.values.map((value) => {
                            return (
                                <div className={"col-lg-3 col-md-4 col-sm-6 sublist-menu-item"} key={item.field + "_" + value.id}>
                                    <Button
                                        className={checkActive(value.id)}
                                        onClick={() => handleClickItem(value.id)}
                                    >
                                        {value.name}
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </DropdownButton>
            }
        </div>
    );
}

export default SublistDropdown;