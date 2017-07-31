<?php

namespace App;
namespace App\Employee;
namespace App\Suggestion;


use Illuminate\Database\Eloquent\Model;

class Mood extends Model
{
    protected $table = 'mood';

    public function employees()
    {
        return $this->hasMany('Employee', 'id', 'employee_id');
    }

    public function suggestion()
    {
        return $this->hasOne('Suggestion', 'id', 'suggestion_id');
    }
}
