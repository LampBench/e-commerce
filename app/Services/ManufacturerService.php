<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Repositories\ManufacturerRepository;

class ManufacturerService extends ExpandedBaseService
{
    public function __construct(ManufacturerRepository $repository)
    {
        $this->repository = $repository;
    }
}
