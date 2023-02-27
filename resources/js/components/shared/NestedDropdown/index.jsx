import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DropdownChildMenu from "../DropdownChildMenu";
import './style.scss';

function NestedDropdown({ items, dropdownName, title, drop, setAPIParams }) {
    const [show, setShow] = useState(false);
    const [showItem, setShowItem] = useState(0);

    const handleChangeChosenItems = (item) => {
        setAPIParams(item);
        setShowItem(0);
        setShow(false);
    }

    return (
        <>
            <DropdownButton
                id="dropdown-item-button"
                title={title}
                drop={drop}
                show={show}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {items && items.map((item) => {
                    if (item.all_children.length !== 0) {
                        return (
                            <DropdownButton
                                id="dropdown-item-button"
                                title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                show={showItem === item.id}
                                drop={'end'}
                                onMouseEnter={() => setShowItem(item.id)}
                                onMouseLeave={() => setShowItem(0)}
                                key={dropdownName + "_" + item.id}>
                                <div className="row dropdown-child-menu">
                                    {item.all_children && item.all_children.map((childItem) => {
                                        return (
                                            <DropdownChildMenu
                                                item={childItem}
                                                dropdownName={dropdownName}
                                                handleChangeItem={handleChangeChosenItems}
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
                                key={dropdownName + "_" + item.id}
                                onClick={() => handleChangeChosenItems(item)}>{item.name}
                            </Dropdown.Item>
                        );
                    }
                })}
            </DropdownButton>
        </>
    );
}

export default NestedDropdown;