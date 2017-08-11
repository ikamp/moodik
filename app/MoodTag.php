<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MoodTag extends Model
{
    protected $table = 'moodtag';
    public $timestamps = false;
    protected $fillable = ['mood_id', 'tag_id'];


    public function moods()
    {
        return $this->hasMany('App\Mood', 'id', 'mood_id');
    }

    public function tags()
    {
        return $this->hasMany('App\Tag', 'id', 'tag_id');
    }

}
