<?php

namespace App\Repositories;

use App\Classes\BaseRepository;
use App\Models\UserGroup;

class GroupRepository extends BaseRepository
{
    public function __construct(UserGroup $model)
    {
        $this->model = $model;
    }
}
