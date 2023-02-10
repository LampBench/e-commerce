<?php

namespace App\Repositories;

use App\Classes\ExpandedBaseRepository;
use App\Models\Author;

class AuthorRepository extends ExpandedBaseRepository
{
    public function __construct(Author $model)
    {
        $this->model = $model;
    }
}
