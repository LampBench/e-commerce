<?php

namespace App\Repositories;

use App\Classes\BaseRepository;
use App\Models\Voucher;

class VoucherRepository extends BaseRepository
{
    public function __construct(Voucher $model)
    {
        $this->model = $model;
    }
}