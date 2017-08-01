<?php

namespace App;
namespace App\Mood;


use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    protected $table = 'suggestion';
    public $timestamps = 'false';

    public function suggestion()
    {
        return $this->hasOne('Mood', 'id', 'suggestion_id');
    }
}
