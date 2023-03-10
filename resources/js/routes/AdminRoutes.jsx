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
const Voucher = Loadable(lazy(() => import("../pages/admin/Voucher")));
const CreateVoucher = Loadable(lazy(() => import("../pages/admin/CreateVoucher")));

// Manage Discount Page
const Discount = Loadable(lazy(() => import("../pages/admin/Discount")));
const CreateDiscount = Loadable(lazy(() => import("../pages/admin/CreateDiscount")));

// Manage Product Page
const Product = Loadable(lazy(() => import("../pages/admin/Product")));

// Manage Manufacturer Page
const Manufacturer = Loadable(lazy(() => import("../pages/admin/Manufacturer")));
const CreateManufacturer = Loadable(lazy(() => import("../pages/admin/CreateManufacturer")));

// Manage Product Page
const CreateProduct = Loadable(lazy(() => import("../pages/admin/CreateProduct")));
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
            element: <Voucher />
        },
        {
            path: "/admin/vouchers/create",
            element: <CreateVoucher type="create" />
        },
        {
            path: "/admin/manufacturers/create",
            element: <CreateManufacturer type="create" />,
        },
        {
            path: "/admin/products",
            element: <Product />,
        },
        {
            path: "/admin/products/create",
            element: <CreateProduct type="create" />,
        },
        {
            path: "/admin/discounts",
            element: <Discount />,
        },
    ],
};

export default AdminRoutes;
