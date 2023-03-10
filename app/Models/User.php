<?php

namespace App\Models;

use App\Traits\GetTable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use SoftDeletes;
    use GetTable;

    protected $table = 'users';
    public $timestamps = false;
    public const ROLE_ADMIN = true;
    public const ROLE_USER = false;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'user_group_id'
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function scopeGetAllDetails($query)
    {
        return $query
            ->select(
                'users.id',
                'users.first_name',
                'users.last_name',
                'users.email',
                'users.user_group_id',
            );
    }

    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function group()
    {
        return $this->belongsTo(UserGroup::class, 'user_group_id');
    }
}
