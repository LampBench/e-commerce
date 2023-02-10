<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Repositories\AuthorRepository;

class AuthorService extends ExpandedBaseService
{
    public function __construct(AuthorRepository $repository)
    {
        $this->repository = $repository;
    }
}
