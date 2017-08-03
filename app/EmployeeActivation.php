<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployeeActivation extends Model
{
    protected $table = 'employeeactivation';

    protected $fillable = ['employee_id', 'token'];



    public function employee()
    {
        return $this->belongsTo('App\Employee', 'employee_id', 'id');
    }
}
