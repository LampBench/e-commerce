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
            'perPage' => 10
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
            'products.id',
            'name',
            'manufacturer-name',
            'category-name'
        ],
        'extraFields' => [
            'category-id' => 'categories.id',
            'manufacturer-id' => 'manufacturers.id',
            'name' => 'products.name',
            'manufacturer-name' => 'manufacturers.name',
            'category-name' => 'categories.name'
        ]
    ],
    'nonStringFields' => [
        'id',
        'rating_star',
        'quantity',
        'type',
        'status',
        'value',
        'amount',
        'date',
        'completed_date',
        'categories.id',
        'manufacturers.id'
    ],
];
