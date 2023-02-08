import { lazy } from "react";
import AdminLayout from "../layouts/admin";
import Loadable from "../components/shared/Loadable";

const Dashboard = Loadable(lazy(() => import("../pages/admin/Dashboard")));
const Order = Loadable(lazy(() => import("../pages/admin/Order")));
const User = Loadable(lazy(() => import("../pages/admin/User")));
const CreateUser = Loadable(lazy(() => import("../pages/admin/CreateUser")));
const Category = Loadable(lazy(() => import("../pages/admin/Category")));
const AdminRoutes = {
    path: "/admin",
    element: <AdminLayout />,
    children: [
        {
            path: "/admin",
            element: <Dashboard />,
        },
        {
            path: "/admin/orders",
            element: <Order />,
        },
        {
            path: "/admin/users",
            element: <User />,
        },
        {
            path: "/admin/users/user-create",
            element: <CreateUser type="create" />,
        },
        {
            path: "/admin/categories",
            element: <Category />,
        },
    ],
};

export default AdminRoutes;
