<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Repositories\AuthorRepository;

class AuthorService extends ExpandedBaseService
{
    protected $repository;

    public function __construct(AuthorRepository $repository)
    {
        $this->repository = $repository;
    }
}
