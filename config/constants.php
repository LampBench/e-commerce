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
    'nonStringFields' => [
        'id',
        'rating-star',
        'quantity',
        'type',
        'status',
        'value',
        'amount',
        'date',
        'completed-date'
    ],
];
