import React from "react";
import {
    Badge,
    IconButton,
} from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Cart (props) {
    const navigate = useNavigate();
    return (
        <IconButton
            size="large"
            color="inherit"
            sx={props.sx}
            onClick={() => navigate("/cart")}
        >
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
}

export default Cart;