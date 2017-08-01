<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    protected $table = 'suggestion';
    public $timestamps = false;

    public function mood()
    {
        return $this->hasOne('App\Mood', 'id', 'suggestion_id');
    }
}
