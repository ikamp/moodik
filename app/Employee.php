<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employee extends Authenticatable
{
    protected $table = 'employee';

<<<<<<< HEAD
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
=======
    use Notifiable;

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
>>>>>>> 28a9c93f4e1016b9ed3a2969581053ca46f5e68d
}
