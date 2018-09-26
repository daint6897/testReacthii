<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class test_table_react extends Model
{
    protected $table='test_table_reacts';
    protected $fillable = [
        'name', 'tel', 'Permission',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */

}
