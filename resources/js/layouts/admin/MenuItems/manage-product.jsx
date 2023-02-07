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
            id: 'manage-product',
            title: 'Manage Product',
            type: 'collapse',
            icon: icons.IconInventory2,
            
            children: [
                {
                    id: 'books',
                    title: 'Book List',
                    type: 'item',
                    url: '/admin/books',
                    icon: icons.IconLibraryBooks,
                },
                {
                    id: 'book-create',
                    title: 'Create Book',
                    type: 'item',
                    url: '/admin/books/book-create',
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
                    id: 'categories',
                    title: 'Category List',
                    type: 'item',
                    url: '/admin/categories',
                    icon: icons.IconDashboard,
                },
                {
                    id: 'category-create',
                    title: 'Create Category',
                    type: 'item',
                    url: '/admin/categories/category-create',
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
                    id: 'authors',
                    title: 'Author List',
                    type: 'item',
                    url: '/admin/authors',
                },
                {
                    id: 'manage-author-create',
                    title: 'Create Author',
                    type: 'item',
                    url: '/admin/authors/author-create',
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
                    id: 'discounts',
                    title: 'Discount List',
                    type: 'item',
                    url: '/admin/discounts',
                },
                {
                    id: 'discount-create',
                    title: 'Create Discount',
                    type: 'item',
                    url: '/admin/discounts/discount-create',
                }
            ]
        }
    ]
};

export default manageProduct;