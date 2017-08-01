<?php

namespace App;
namespace App\Mood;
namespace App\Tag;

use Illuminate\Database\Eloquent\Model;

class MoodTag extends Model
{
    protected $table = 'moodtag';
    public $timestamps = 'false';

    public function moods()
    {
        return $this->hasMany('Mood', 'mood_id','id');
    }

    public function tags()
    {
        return $this->hasMany('Tag', 'tag_id','id');
    }

}
