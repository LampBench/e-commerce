<?php

namespace App\Repositories;

use App\Classes\ExpandedBaseRepository;
use App\Models\User;


class UserRepository extends ExpandedBaseRepository
{
    protected $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }
}
