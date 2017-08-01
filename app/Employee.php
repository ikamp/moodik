<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employee';

    public function department()
    {
        return $this->hasOne('App\Department', 'department_id', 'id');
    }

    public function status()
    {
        return $this->hasOne('App\Status', 'status_id', 'id');
    }

    public function mood()
    {
        return $this->hasOne('App\Mood', 'id', 'employee_id');
    }
}
