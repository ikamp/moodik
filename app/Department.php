<?php

namespace App;
namespace App\Company;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = 'department';
    public $timestamps = 'false';

    public function companies()
    {
        return $this->hasMany('Company', 'id', 'company_id');
    }
}
