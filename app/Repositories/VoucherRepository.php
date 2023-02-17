<?php

namespace App\Repositories;

use App\Classes\BaseRepository;
use App\Classes\ExpandedBaseRepository;
use App\Models\Voucher;

class VoucherRepository extends ExpandedBaseRepository
{
    public function __construct(Voucher $model)
    {
        $this->model = $model;
    }
}
