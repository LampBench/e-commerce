<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;

class UserService extends ExpandedBaseService
{
    protected $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $data)
    {
        $data['password'] = Hash::make($data['password']);
        return $this->repository->create($data);
    }
}
