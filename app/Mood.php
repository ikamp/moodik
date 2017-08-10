<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mood extends Model
{
    protected $table = 'mood';
    protected $fillable = ['employee_id', 'point', 'suggestion_id', 'week', 'remember_token'];

    public function employee()
    {
        return $this->hasOne('App\Employee', 'id', 'employee_id');
    }

    public function suggestion()
    {
        return $this->hasOne('App\Suggestion', 'id', 'suggestion_id');
    }

    public function moodTag()
    {
        return $this->hasOne('App\MoodTag', 'mood_id', 'id');
    }
}
