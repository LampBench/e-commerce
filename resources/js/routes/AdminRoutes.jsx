import { lazy } from "react";
import AdminLayout from "../layouts/admin";
import Loadable from "../components/shared/Loadable";

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
const CreateCategory = Loadable(lazy(() => import("../pages/admin/CreateCategory")));

// Manage Voucher Page
const CreateVoucher = Loadable(lazy(() => import("../pages/admin/CreateVoucher")));

// Manage Manufacturer Page
const Manufacturer = Loadable(lazy(() => import("../pages/admin/Manufacturer")));
const CreateManufacturer = Loadable(lazy(() => import("../pages/admin/CreateManufacturer")));

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
        { path: "/admin/categories/create", element: <CreateCategory /> },
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
            path: "/admin/manufacturers",
            element: <Manufacturer />,
        },
        {
            path: "/admin/vouchers",
            element: <CreateVoucher />
        },
        {
            path: "/admin/vouchers/create",
            element: <CreateVoucher type="create" />
        },
        {
            path: "/admin/manufacturers/create",
            element: <CreateManufacturer type="create" />,
        },
    ],
};

export default AdminRoutes;
