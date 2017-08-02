<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mood extends Model
{
    protected $table = 'mood';

    public function employee()
    {
        return $this->hasOne('App\Employee', 'employee_id', 'id');
    }

    public function suggestion()
    {
        return $this->hasOne('App\Suggestion', 'suggestion_id', 'id');
    }

    public function moodTag()
    {
        return $this->hasOne('App\MoodTag', 'id', 'mood_id');
    }
}
