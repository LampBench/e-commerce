<?php

namespace App\Models;

use App\Traits\GetTable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;
    use GetTable;

    protected $table = 'vouchers';
    public $timestamps = false;

    protected $fillable = [
        'title',
        'description',
        'code',
        'type',
        'scope',
        'value',
        'start_date',
        'end_date',
        'status',
        'limit'
    ];

    public function scopeGetAllDetails($query)
    {
        return $query
            ->select('*');
    }
}
