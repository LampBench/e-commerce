import SharedLayout from "../layouts/shared";
import { lazy } from "react";
import Loadable from "../components/shared/Loadable";
const Login = Loadable(lazy(() => import("../pages/shared/Authenticate/AuthLogin")));
const Register = Loadable(lazy(() => import("../pages/shared/Authenticate/AuthRegister")));

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