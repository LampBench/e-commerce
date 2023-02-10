<?php

return [
    'users' => [
        'default' => [
            'sort' => 'first-name',
            'perPage' => 15
        ],
        'sortFields' => [
            'users.id',
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
    'authors' => [
        'default' => [
            'sort' => 'author-name',
            'perPage' => 10
        ],
        'sortFields' => [
            'authors.id',
            'author-name',
            'author-bio'
        ],
        'filterFields' => [],
        'searchFields' => [
            'authors.id',
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
            'categories.id',
            'category-name',
            'category-desc'
        ],
        'filterFields' => [],
        'searchFields' => [
            'categories.id',
            'category-name',
            'category-desc'
        ],
        'extraFields' => []
    ],
    'nonStringFields' => [
        'id',
        'rating-star',
        'quantity',
    ]
];
