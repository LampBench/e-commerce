<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGroup extends Model
{
    use HasFactory;

    protected $table = 'user_groups';

    public const ADMIN_GROUP_ID = 1;
    public const MODERATOR_GROUP_ID = 2;
    public const MEMBER_GROUP_ID = 3;

    protected $fillable = [
        'name',
        'permissions'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
