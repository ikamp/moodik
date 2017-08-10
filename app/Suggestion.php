<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    protected $table = 'suggestion';
    protected $fillable = ['description'];
    public $timestamps = false;

    public function mood()
    {
        return $this->hasOne('App\Mood', 'suggestion_id', 'id');
    }
}
