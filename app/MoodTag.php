<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MoodTag extends Model
{
    protected $table = 'moodtag';
    public $timestamps = false;

    public function moods()
    {
        return $this->hasMany('App\Mood', 'mood_id','id');
    }

    public function tags()
    {
        return $this->hasMany('App\Tag', 'tag_id','id');
    }

}
