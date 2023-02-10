import { 
    Groups as IconGroups,
    Group as IconGroup,
    GroupAdd as IconGroupAdd,
    Security as IconSecurity,
    AdminPanelSettings as IconAdminPanelSettings,
    AddModerator as IconAddModerator,

} from "@mui/icons-material";
const icons = { 
    IconGroups, 
    IconGroup,
    IconGroupAdd,
    IconSecurity,
    IconAdminPanelSettings,
    IconAddModerator,
};

const manageUser = {
    id: 'manage-user-group',
    title: 'Manage User',
    caption: 'Manage User',
    type: 'group',
    children: [
        {
            id: 'manage-user',
            title: 'Manage User',
            type: 'collapse',
            icon: icons.IconGroups,
            
            children: [
                {
                    id: 'admin-users',
                    title: 'User List',
                    type: 'item',
                    url: '/admin/users',
                    icon: icons.IconGroup
                },
                {
                    id: 'users-create',
                    title: 'Create User',
                    type: 'item',
                    url: '/admin/users/create',
                    icon: icons.IconGroupAdd
                }
            ]
        },
        {
            id: 'manage-groups',
            title: 'Manage User Groups',
            type: 'collapse',
            icon: icons.IconSecurity,

            children: [
                {
                    id: 'admin-groups',
                    title: 'Group List',
                    type: 'item',
                    url: '/admin/groups',
                    icon: icons.IconAdminPanelSettings
                },
                {
                    id: 'groups-create',
                    title: 'Create Group',
                    type: 'item',
                    url: '/admin/groups/create',
                    icon: icons.IconAddModerator
                }
            ]
        }
    ]
};

export default manageUser;