import { lazy } from "react";
import AdminLayout from "../layouts/admin";
import Loadable from "../components/shared/Loadable";
import Author from "../pages/admin/Author";
import CreateCategory from "../pages/admin/CreateCategory";

const Dashboard = Loadable(lazy(() => import("../pages/admin/Dashboard")));
const Order = Loadable(lazy(() => import("../pages/admin/Order")));
const User = Loadable(lazy(() => import("../pages/admin/User")));
const CreateUser = Loadable(lazy(() => import("../pages/admin/CreateUser")));

// Manage Group Page
const GroupList = Loadable(lazy(() => import("../pages/admin/GroupList")));
const GroupView = Loadable(lazy(() => import("../pages/admin/GroupView")));
const GroupCreate = Loadable(lazy(() => import("../pages/admin/GroupCreate")));

// Manage Category Page
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
            path: "/admin/users/create",
            element: <CreateUser type="create" />,
        },
        {
            path: "/admin/categories",
            element: <Category />,
        },
        {
            path: "/admin/groups",
            element: <GroupList />,
        },
        {
            path: "/admin/groups/:id",
            element: <GroupView />,
        },
        {
            path: "/admin/groups/create",
            element: <GroupCreate type="create" />,
        },
        {
            path: "/admin/authors",
            element: <Author />,
        },
        { path: "/admin/categories/create", element: <CreateCategory /> },
    ],
};

export default AdminRoutes;
