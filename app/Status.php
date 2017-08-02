<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = 'status';
    public $timestamps = false;

    public function employee()
    {
        return $this->hasOne('App\Employee', 'status_id', 'id');
    }
}
