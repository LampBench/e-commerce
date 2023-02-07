<?php

namespace App\Repositories;

use App\Classes\BaseRepository;
use App\Models\Author;

class AuthorRepository extends BaseRepository
{
    protected $model;

    public function __construct(Author $model)
    {
        $this->model = $model;
    }
}
