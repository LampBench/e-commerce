import { useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import ClientRoutes from "./ClientRoutes";
import SharedRoutes from "./SharedRoutes";

export default function Routes() {
    const routes = useRoutes([
        AdminRoutes,
        ClientRoutes,
        SharedRoutes
    ]);

    return routes;
}