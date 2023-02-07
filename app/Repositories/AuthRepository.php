<?php

namespace App\Repositories;

use App\Classes\BaseRepository;
use App\Models\User;

class AuthRepository extends BaseRepository
{
    protected $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }
}
