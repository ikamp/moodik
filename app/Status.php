<?php

namespace App;
namespace App\Employee;


use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = 'status';
    public $timestamps = 'false';

    public function employee()
    {
        return $this->hasOne('Employee', 'id', 'status_id');
    }
}
