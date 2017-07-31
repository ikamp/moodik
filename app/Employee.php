<?php

namespace App;
namespace App\Department;
namespace App\Status;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employee';

    public function departments()
    {
        return $this->hasMany('Department', 'id', 'department_id');
    }

    public function status()
    {
        return $this->hasOne('Status', 'id', 'status_id');
    }
}
