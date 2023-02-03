import React from "react";
import ClientLayout from "./client";
import { useSelector } from "react-redux";
import {
    CategoryList
} from "../pages/client";
function LayoutWrapper(props) {
    const user = useSelector((state) => state.user.data);
    return (
        <ClientLayout {...props} user={user}>
            <CategoryList />
        </ClientLayout>
    );
}

export default LayoutWrapper;