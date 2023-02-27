<?php

namespace App\Repositories;

use App\Classes\BaseRepository;
use App\Models\User;
use Laravel\Passport\Client;

class AuthRepository extends BaseRepository
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function getClients()
    {
        $client = Client::where('password_client', 1)->first();
        if (!$client) {
            return false;
        }

        return $client;
    }
}
