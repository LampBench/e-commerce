<?php

namespace App\Repositories;

use App\Classes\ExpandedBaseRepository;
use App\Models\Manufacturer;

class ManufacturerRepository extends ExpandedBaseRepository
{
    public function __construct(Manufacturer $model)
    {
        $this->model = $model;
    }
}
