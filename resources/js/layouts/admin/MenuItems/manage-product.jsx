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
                    id: 'admin-books',
                    title: 'Book List',
                    type: 'item',
                    url: '/admin/books',
                    icon: icons.IconLibraryBooks,
                },
                {
                    id: 'books-create',
                    title: 'Create Book',
                    type: 'item',
                    url: '/admin/books/create',
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
            id: 'manage-author',
            title: 'Manage Author',
            type: 'collapse',
            icon: icons.IconBadge,

            children: [
                {
                    id: 'admin-authors',
                    title: 'Author List',
                    type: 'item',
                    url: '/admin/authors',
                },
                {
                    id: 'authors-create',
                    title: 'Create Author',
                    type: 'item',
                    url: '/admin/authors/create',
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