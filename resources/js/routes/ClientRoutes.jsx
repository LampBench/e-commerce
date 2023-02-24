import ClientLayout from "../layouts/client";
import { lazy } from "react";
import Loadable from "../components/shared/Loadable";

const Home = Loadable(lazy(() => import("../pages/client/Home")));
const Category = Loadable(lazy(() => import("../pages/client/Category")));
const Product = Loadable(lazy(() => import("../pages/client/Product")));

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
        {
            path: "products",
            element: <Product />,
        },
    ],
}

export default ClientRoutes;