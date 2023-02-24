import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DropdownChildMenu from "../DropdownChildMenu";
import './style.scss';

function NestedDropdown({ items, dropdownName, title, drop, setAPIParams, checkShow, setCheckShow }) {
    const [show, setShow] = useState(0);

    const handleChangeChosenCategories = (id) => {
        let checkShowId = checkShow;
        if (checkShowId.includes(id)) {
            checkShowId.splice(checkShowId.indexOf(id), 1);
        }
        else {
            checkShowId.push(id);
        }
        setAPIParams(checkShowId, dropdownName, setCheckShow);
    }

    return (
        <>
            <DropdownButton
                id="dropdown-item-button"
                title={title}
                drop={drop}
                autoClose={'outside'}>
                {items && items.map((item) => {
                    if (item.all_children.length !== 0) {
                        return (
                            <DropdownButton
                                id="dropdown-item-button"
                                title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                show={show === item.id}
                                drop={'end'}
                                onMouseEnter={() => setShow(item.id)}
                                onMouseLeave={() => setShow(0)}
                                key={dropdownName + "_" + item.id}>
                                <div className="row dropdown-child-menu">
                                    {item.all_children && item.all_children.map((childItem) => {
                                        return (
                                            <DropdownChildMenu
                                                item={childItem}
                                                dropdownName={dropdownName}
                                                checkShow={checkShow}
                                                handleChangeCategories={handleChangeChosenCategories}
                                                key={dropdownName + "_" + childItem.id} className="row">
                                            </DropdownChildMenu>
                                        )
                                    })}
                                </div>
                            </DropdownButton>
                        );
                    }
                    else {
                        return (
                            <Dropdown.Item
                                as="button"
                                active={checkShow.includes(item.id)}
                                key={dropdownName + "_" + item.id}
                                onClick={() => handleChangeChosenCategories(item.id)}>{item.name}
                            </Dropdown.Item>
                        );
                    }
                })}
            </DropdownButton>
        </>
    );
}

export default NestedDropdown;