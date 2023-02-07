<?php

namespace App\Classes;

use App\Interfaces\RepositoryInterface;
use App\Repositories\EloquentRepository;

abstract class BaseRepository extends EloquentRepository implements RepositoryInterface
{
    protected $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update(array $data, $id)
    {
        return $this->model->update($data, $id);
    }

    public function delete($id)
    {
        return $this->model->delete($id);
    }

    public function show($id)
    {
        return $this->model->show($id);
    }
}
