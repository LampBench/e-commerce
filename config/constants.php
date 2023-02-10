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
            'admin'
        ],
        'filterFields' => [
            'admin',
        ],
        'searchFields' => [
            'id',
            'full-name'
        ],
        'extraFields' => [
            'full-name' => "CONCAT(users.first_name,' ', users.last_name)"
        ]
    ],
    'authors' => [
        'default' => [
            'sort' => 'author-name',
            'perPage' => 10
        ],
        'sortFields' => [
            'id',
            'author-name',
            'author-bio'
        ],
        'filterFields' => [],
        'searchFields' => [
            'id',
            'author-name',
            'author-bio'
        ],
        'extraFields' => []
    ],
    'categories' => [
        'default' => [
            'sort' => 'category-name',
            'perPage' => 10
        ],
        'sortFields' => [
            'id',
            'category-name',
            'category-desc'
        ],
        'filterFields' => [],
        'searchFields' => [
            'id',
            'category-name',
            'category-desc'
        ],
        'extraFields' => []
    ],
    'nonStringFields' => [
        'id',
        'admin',
        'rating-star',
        'quantity',
    ]
];
