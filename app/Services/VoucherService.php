<?php

namespace App\Services;

use App\Classes\BaseService;
use App\Repositories\VoucherRepository;

class VoucherService extends BaseService {

    public function __construct(VoucherRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $data)
    {
        
    }
}