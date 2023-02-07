import SharedLayout from "../layouts/shared";

import Login from "../pages/shared/Authenticate/AuthLogin";

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
            element: <Login />,
        }
    ]
}

export default SharedRoutes;