<?php

return [
    'users' => [
        'default' => [
            'sort' => 'first-name',
            'perPage' => 15
        ],
        'sortFields' => [
            'id',
            'first-name',
            'last-name',
            'group-name'
        ],
        'filterFields' => [],
        'searchFields' => [
            'users.id',
            'full-name'
        ],
        'extraFields' => [
            'full-name' => "CONCAT(users.first_name,' ', users.last_name)"
        ]
    ],
    'manufacturers' => [
        'default' => [
            'sort' => 'name',
            'perPage' => 10
        ],
        'sortFields' => [
            'id',
            'name',
            'phone-number',
            'email',
            'address',
            'type'
        ],
        'filterFields' => [
            'type'
        ],
        'searchFields' => [
            'manufacturers.id',
            'manufacturers.name',
            'manufacturers.phone-number'
        ],
        'extraFields' => []
    ],
    'categories' => [
        'default' => [
            'sort' => 'name',
            'perPage' => 'all'
        ],
        'sortFields' => [
            'id',
            'name',
            'description'
        ],
        'filterFields' => [],
        'searchFields' => [
            'categories.id',
            'name',
            'description'
        ],
        'extraFields' => []
    ],
    'products' => [
        'default' => [
            'sort' => 'name',
            'perPage' => 10
        ],
        'sortFields' => [
            'id',
            'name',
            'category-name',
            'manufacturer-name',
            'status',
            'quantity',
            'discount-amount',
            'final-price',
            'average-rating-star',
            'number-of-reviews'
        ],
        'filterFields' => [
            'category-id',
            'manufacturer-id',
            'status'
        ],
        'searchFields' => [
            'id',
            'name',
            'manufacturer-name',
            'category-name'
        ],
        'extraFields' => [
            'id' => 'products.id',
            'category-id' => 'categories.id',
            'manufacturer-id' => 'manufacturers.id',
            'name' => 'products.name',
            'manufacturer-name' => 'manufacturers.name',
            'category-name' => 'categories.name'
        ]
    ],
    'discounts' => [
        'default' => [
            'sort' => 'product-id',
            'perPage' => 10
        ],
        'sortFields' => [
            'product-id',
            'product-name',
            'product-price',
            'product-quantity',
            'start-date',
            'end-date',
            'value',
            'type',
            'discount-amount'
        ],
        'filterFields' => [
            'type'
        ],
        'searchFields' => [
            'product-id',
            'product-name',
        ],
        'extraFields' => [
            'product-name' => 'products.name',
        ]
    ],
    'vouchers' => [
        'default' => [
            'sort' => 'title',
            'perPage' => 10
        ],
        'sortFields' => [
            'id',
            'title',
            'type',
            'value',
            'start-date',
            'end-date',
            'status'
        ],
        'filterFields' => [
            'type'
        ],
        'searchFields' => [
            'id',
            'title',
        ],
        'extraFields' => []
    ],
    'nonStringFields' => [
        'id',
        'rating-star',
        'quantity',
        'type',
        'status',
        'value',
        'amount',
        'date',
        'completed-date',
        'categories.id',
        'manufacturers.id',
        'product-id'
    ],
];
