import {
    Inventory2 as IconInventory2,
    LibraryBooks as IconLibraryBooks,
    LibraryAdd as IconLibraryAdd,
    Category as IconCategory,
    Badge as IconBadge,
    Sell as IconSell,
} from "@mui/icons-material";
const icons = {
    IconInventory2,
    IconLibraryBooks,
    IconLibraryAdd,
    IconCategory,
    IconBadge,
    IconSell
};

const manageProduct = {
    id: 'manage-product-group',
    title: 'Manage Product',
    caption: 'Manage Product',
    type: 'group',
    children: [
        {
            id: 'manage-products',
            title: 'Manage Product',
            type: 'collapse',
            icon: icons.IconInventory2,

            children: [
                {
                    id: 'admin-products',
                    title: 'Product List',
                    type: 'item',
                    url: '/admin/products',
                    icon: icons.IconLibraryBooks,
                },
                {
                    id: 'products-create',
                    title: 'Create Product',
                    type: 'item',
                    url: '/admin/products/create',
                    icon: icons.IconLibraryAdd,
                }
            ]
        },
        {
            id: 'manage-category',
            title: 'Manage Category',
            type: 'collapse',
            icon: icons.IconCategory,

            children: [
                {
                    id: 'admin-categories',
                    title: 'Category List',
                    type: 'item',
                    url: '/admin/categories',
                    icon: icons.IconDashboard,
                },
                {
                    id: 'categories-create',
                    title: 'Create Category',
                    type: 'item',
                    url: '/admin/categories/create',
                    icon: icons.IconDashboard,
                }
            ]
        },
        {
            id: 'manage-manufacturer',
            title: 'Manage Manufacturer',
            type: 'collapse',
            icon: icons.IconBadge,

            children: [
                {
                    id: 'admin-manufacturers',
                    title: 'Manufacturer List',
                    type: 'item',
                    url: '/admin/manufacturers',
                },
                {
                    id: 'manufacturers-create',
                    title: 'Create Manufacturer',
                    type: 'item',
                    url: '/admin/manufacturers/create',
                }
            ]
        },
        {
            id: 'manage-discount',
            title: 'Manage Discount',
            type: 'collapse',
            icon: icons.IconSell,

            children: [
                {
                    id: 'admin-discounts',
                    title: 'Discount List',
                    type: 'item',
                    url: '/admin/discounts',
                },
                {
                    id: 'discounts-create',
                    title: 'Create Discount',
                    type: 'item',
                    url: '/admin/discounts/create',
                }
            ]
        }
    ]
};

export default manageProduct;