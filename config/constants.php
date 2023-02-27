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
        ],
        'relatedModelFilters' => [],
        'customSort' => []
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
            'type',
        ],
        'searchFields' => [
            'manufacturers.id',
            'manufacturers.name',
            'manufacturers.phone-number'
        ],
        'extraFields' => [],
        'relatedModelFilters' => [
            'category-id' =>
            [
                'products',
                'category_id',
            ]
        ],
        'customSort' => []
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
        'extraFields' => [],
        'relatedModelFilters' => [],
        'customSort' => []
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
            'end-date',
            'discount-amount',
            'final-price',
            'average-rating-star',
            'number-of-reviews',
            'on-sale',
            'recommended'
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
            'category-name',
        ],
        'extraFields' => [
            'id' => 'products.id',
            'category-id' => 'categories.id',
            'manufacturer-id' => 'manufacturers.id',
            'status' => 'products.status',
            'name' => 'products.name',
            'manufacturer-name' => 'manufacturers.name',
            'category-name' => 'categories.name'
        ],
        'relatedModelFilters' => [],
        'customSort' => [
            'on-sale' => [
                [
                    'discount_amount',
                    'desc'
                ],
                [
                    'final_price',
                    'asc'
                ],
                [
                    'end_date',
                    'asc'
                ],
                [
                    'name',
                    'asc'
                ],
                [
                    'id',
                    'asc'
                ]
            ],
            'recommended' => [
                [
                    'average_rating_star',
                    'desc'
                ],
                [
                    'number_of_reviews',
                    'desc'
                ],
                [
                    'final_price',
                    'asc'
                ],
                [
                    'name',
                    'asc'
                ],
                [
                    'id',
                    'asc'
                ]
            ]
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
        ],
        'relatedModelFilters' => [],
        'customSort' => []
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
        'extraFields' => [],
        'relatedModelFilters' => [],
        'customSort' => []
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
        'start-date',
        'end-date',
        'completed-date',
        'categories.id',
        'manufacturers.id',
        'product-id'
    ],
];
