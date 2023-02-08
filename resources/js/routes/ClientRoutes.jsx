import ClientLayout from "../layouts/client";
import { lazy } from "react";
import Loadable from "../components/shared/Loadable";

const Home = Loadable(lazy(() => import("../pages/client/Home")));
const Category = Loadable(lazy(() => import("../pages/client/Category")));

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