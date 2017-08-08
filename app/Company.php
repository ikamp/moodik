<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'company';
    protected $fillable = ['name'];

    public function departments()
    {
        return $this->hasMany('App\Department', 'company_id', 'id');
    }

    public function employees()
    {
        return $this->hasMany('App\Employee', 'id', 'company_id');
    }
}
