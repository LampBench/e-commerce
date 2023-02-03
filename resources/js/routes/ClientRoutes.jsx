import ClientLayout from "../layouts/client";
import Home from "../pages/client/Home";
import Category from "../pages/client/Category";

const ClientRoutes = {
    path: "/",
    element: <ClientLayout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "categories",
            element: <Category />,
        },
    ],
}

export default ClientRoutes;