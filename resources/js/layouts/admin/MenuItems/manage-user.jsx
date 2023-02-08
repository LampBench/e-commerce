import { 
    Groups as IconGroups,
    Group as IconGroup,
    GroupAdd as IconGroupAdd,
} from "@mui/icons-material";
const icons = { 
    IconGroups, 
    IconGroup,
    IconGroupAdd
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
        }
    ]
};

export default manageUser;