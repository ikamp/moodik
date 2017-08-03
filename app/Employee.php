<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employee extends Authenticatable
{
    protected $table = 'employee';

    public function department()
    {
        return $this->hasOne('App\Department', 'id', 'department_id');
    }

    public function status()
    {
        return $this->hasOne('App\Status', 'id', 'status_id');
    }

    public function mood()
    {
        return $this->hasOne('App\Mood', 'employee_id', 'id');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'status_id', 'name', 'last_name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
