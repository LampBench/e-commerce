<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;

class UserService extends ExpandedBaseService
{
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $data)
    {
        $data['password'] = Hash::make($data['password']);
        if (empty($data['user_group'])) {
            $data['user_group'] = config('userGroup.userGroupName');
        }
        return $this->repository->create($data);
    }
}
