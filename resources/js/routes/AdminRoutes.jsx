import AdminLayout from "../layouts/admin";
import Dashboard from "../pages/admin/Dashboard";
import Order from "../pages/admin/Order";
import User from "../pages/admin/User";
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
    ],
}

export default AdminRoutes;