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

    public function all()
    {
      // write code here
    }

    public function create(array $data)
    {
        // write code here
    }

    public function update(array $data, $id)
    {
        // write code here
    }

    public function delete($id)
    {
        // write code here
    }

    public function show($id)
    {
        // write code here
    }
}