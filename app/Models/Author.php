<?php

namespace App\Models;

use App\Traits\GetTable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;
    use GetTable;

    protected $table = 'authors';
    public $timestamps = false;

    public function scopeGetAllDetails($query)
    {
        return $query->select('*');
    }
}
