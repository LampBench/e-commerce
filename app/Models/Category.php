<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    public $timestamps = false;

    protected $fillable = [
        'parent_id',
        'name',
        'description',
        'level'
    ];

    public function childrenCategories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function allChildrenCategories()
    {
        return $this->childrenCategories()->with(['allChildrenCategories' => function ($query) {
            return $query->orderBy('id');
        }]);
    }

    public function scopeGetAllDetails($query)
    {
        return $query->select('*');
    }
}
