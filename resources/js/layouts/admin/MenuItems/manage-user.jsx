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
                    id: 'users',
                    title: 'User List',
                    type: 'item',
                    url: '/admin/users',
                    icon: icons.IconGroup
                },
                {
                    id: 'user-create',
                    title: 'Create User',
                    type: 'item',
                    url: '/admin/users/user-create',
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
                    id: 'groups',
                    title: 'Group List',
                    type: 'item',
                    url: '/admin/groups',
                    icon: icons.IconAdminPanelSettings
                },
                {
                    id: 'group-create',
                    title: 'Create Group',
                    type: 'item',
                    url: '/admin/groups/group-create',
                    icon: icons.IconAddModerator
                }
            ]
        }
    ]
};

export default manageUser;