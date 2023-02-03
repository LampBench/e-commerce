import { useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import ClientRoutes from "./ClientRoutes";

export default function Routes() {
    const routes = useRoutes([
        AdminRoutes,
        ClientRoutes,
    ]);

    return routes;
}