<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tag';
    public $timestamps = false;

    public function moodTag()
    {
        return $this->hasOne('App\Tag', 'tag_id', 'id');
    }
}
