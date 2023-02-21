<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Models\UserGroup;
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
        if (empty($data['user_group_id'])) {
            $data['user_group_id'] = UserGroup::MEMBER_GROUP_ID;
        }
        return $this->repository->create($data);
    }
}
