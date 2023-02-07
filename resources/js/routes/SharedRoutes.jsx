import SharedLayout from "../layouts/shared";

import Login from "../pages/shared/Authenticate/AuthLogin";
import Register from "../pages/shared/Authenticate/AuthRegister";
const SharedRoutes = {
    path: "/",
    element: <SharedLayout />,
    children: [
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        }
    ]
}

export default SharedRoutes;