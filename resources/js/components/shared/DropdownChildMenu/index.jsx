import React from "react";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import './style.scss';

function DropdownChildMenu({ item, dropdownName, handleChangeItem }) {
    const itemName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
    const theme = useTheme();

    const getClassName = () => {
        if (item.level === 2) {
            return "component-title";
        }
        if (item.all_children.length > 0) {
            return "component-content-title";
        }
        return "component-content";
    }

    const getDisplayType = () => {
        if (item.level === 2) {
            return " col-lg-3 col-md-6 col-sm-12";
        }
        return "";
    }

    const CustomButton = styled(ButtonUnstyled)`
        background-color: transparent;
        padding-left: 5px;
        text-align: left;
        color: black;
        border: none;
        .active{
            color: white,
        }
    `;

    const CustomDiv = styled('div')({
        margin: '0px',
        height: '30px',
        '&:hover': {
            fontWeight: 'bold',
            backgroundColor: theme.palette.grey[50],
        },
    });

    const handleClickItem = (item) => {
        handleChangeItem(item)
    }

    return (
        <>

            {getClassName() === "component-content" &&
                <CustomDiv className={"row dropdown-child-menu-component" + getDisplayType()}>
                    <CustomButton className={getClassName()} onClick={() => handleClickItem(item)}>{itemName}</CustomButton>
                </CustomDiv>
            }
            {getClassName() !== "component-content" &&
                <div className={"row dropdown-child-menu-component" + getDisplayType()}>
                    <p className={getClassName()}>{itemName}</p>
                    {item.all_children && item.all_children.map((childItem) => {
                        return (
                            <DropdownChildMenu
                                item={childItem}
                                dropdownName={dropdownName}
                                handleChangeItem={handleChangeItem}
                                key={dropdownName + "_" + childItem.id}>
                            </DropdownChildMenu>
                        );
                    })}
                </div>
            }

        </>
    );
}

export default DropdownChildMenu;