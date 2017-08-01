<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = 'department';
    public $timestamps = 'false';

    public function company()
    {
        return $this->belongsTo('App\Company', 'id', 'company_id');
    }

    public function employees()
    {
        return $this->hasMany('App\Employee', 'id', 'department_id');
    }
}
