import React from "react";
import ClientLayout from "./client";
import AdminLayout from "./admin";
import { useSelector } from "react-redux";
import {
    CategoryList
} from "../pages/client";
import Routes from "../routes";

function LayoutWrapper(props) {
    return (
        <Routes />
    );
}

export default LayoutWrapper;