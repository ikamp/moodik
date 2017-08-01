<?php

namespace App;
namespace App\Department;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'company';

    public function departments()
    {
        return $this->hasMany('Department', 'company_id', 'id');
    }
}
