import SharedLayout from "../layouts/shared";
import { lazy } from "react";
import Loadable from "../components/shared/Loadable";
const Login = Loadable(lazy(() => import("../pages/shared/Authenticate/AuthLogin")));
const Register = Loadable(lazy(() => import("../pages/shared/Authenticate/AuthRegister")));
const Error403 = Loadable(lazy(() => import("../pages/shared/Errors/403")));

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
        },
        {
            path: "/error/access-denied",
            element: <Error403 />,
        },
        {
            path: "*",
            element: <div>404</div>,
        },
    ]
}

export default SharedRoutes;