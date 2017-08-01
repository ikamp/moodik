<?php

namespace App;
namespace App\Company;
namespace App\Employee;


use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = 'department';
    public $timestamps = 'false';

    public function company()
    {
        return $this->belongsTo('Company', 'id', 'company_id');
    }

    public function employees()
    {
        return $this->hasMany('Employee', 'id', 'department_id');
    }
}
