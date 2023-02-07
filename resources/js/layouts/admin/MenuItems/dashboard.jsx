import { Dashboard as IconDashboard } from "@mui/icons-material";
const icons = { IconDashboard };

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'admin',
            title: 'Dashboard',
            type: 'item',
            url: '/admin',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;