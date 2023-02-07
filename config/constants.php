<?php

return [
    'users' => [
        'default' => [
            'sort' => 'first_name',
        ],
        'sortFields' => [
            'id',
            'first_name',
            'last_name',
            'admin'
        ],
        'filterFields' => [
            'admin',
        ],
        'searchFields' => [
            'id',
            'full_name'
        ],
        'extraFields' => [
            'full_name' => "CONCAT(users.first_name,' ', users.last_name)"
        ]
    ],
    'authors' => [
        'default' => [
            'sort' => 'author_name'
        ],
        'sortFields' => [
            'id',
            'author_name',
        ],
        'filterFields' => [],
        'searchFields' => [
            'id',
            'author_name',
            'author_bio'
        ],
        'extraFields' => []
    ],
    'categories' => [
        'default' => [
            'sort' => 'category_name'
        ],
        'sortFields' => [
            'id',
            'category_name',
        ],
        'filterFields' => [],
        'searchFields' => [
            'id',
            'category_name',
            'category_desc'
        ],
        'extraFields' => []
    ],
    'nonStringFields' => [
        'id',
        'admin',
        'rating_star',
        'quantity',
    ]
];
