<?php

namespace App;
namespace App\Mood;
namespace App\Tag;

use Illuminate\Database\Eloquent\Model;

class MoodTag extends Model
{
    protected $table = 'moodtag';
    public $timestamps = 'false';

    public function moodTag()
    {
        return $this->hasMany('Mood', 'id','mood_id');
    }

    public function tag()
    {
        return $this->hasMany('Tag', 'id','tag_id');
    }
}
