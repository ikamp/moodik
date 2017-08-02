<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'company';

    public function departments()
    {
        return $this->hasMany('App\Department', 'id', 'company_id');
    }
}
