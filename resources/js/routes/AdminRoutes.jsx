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
            path: "/admin/order",
            element: <Order />,
        },
        {
            path: "/admin/user",
            element: <User />,
        },
    ],
}

export default AdminRoutes;