<?php

namespace App;
namespace App\Department;
namespace App\Status;
namespace App\Mood;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employee';

    public function department()
    {
        return $this->hasOne('Department', 'department_id', 'id');
    }

    public function status()
    {
        return $this->hasOne('Status', 'status_id', 'id');
    }

    public function mood()
    {
        return $this->hasOne('Mood', 'id', 'employee_id');
    }
}
