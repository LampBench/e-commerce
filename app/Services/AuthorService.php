<?php

namespace App\Services;

use App\Classes\BaseService;
use App\Repositories\AuthorRepository;

class AuthorService extends BaseService
{
    protected $repository;

    public function __construct(AuthorRepository $repository)
    {
        $this->repository = $repository;
    }
}
