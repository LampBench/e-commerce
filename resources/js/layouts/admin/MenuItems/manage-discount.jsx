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

const manageDiscount = {
    id: 'manage-discount-group',
    title: 'Manage Discount',
    caption: 'Manage Discount',
    type: 'group',
    children: [
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
        },
        {
            id: 'manage-voucher',
            title: 'Manage Voucher',
            type: 'collapse',
            icon: icons.IconBadge,

            children: [
                {
                    id: 'admin-vouchers',
                    title: 'Voucher List',
                    type: 'item',
                    url: '/admin/vouchers',
                },
                {
                    id: 'vouchers-create',
                    title: 'Create Voucher',
                    type: 'item',
                    url: '/admin/vouchers/create',
                }
            ]
        }
    ]
};

export default manageDiscount;