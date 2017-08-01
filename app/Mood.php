<?php

namespace App;
namespace App\Employee;
namespace App\Suggestion;
namespace App\MoodTag;


use Illuminate\Database\Eloquent\Model;

class Mood extends Model
{
    protected $table = 'mood';

    public function employees()
    {
        return $this->hasMany('Employee', 'employee_id', 'id');
    }

    public function suggestion()
    {
        return $this->hasOne('Suggestion', 'suggestion_id', 'id');
    }

    public function moodTag()
    {
        return $this->hasOne('MoodTag', 'id', 'mood_id');
    }
}
