<?php

namespace App\Http\Controllers;

use App\Employee;
use App\Mood;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WeeklyEmailController extends Controller
{
    public function index() {
        $currentWeek = Mood::max('week') + 1;
        $employees = Employee::where('company_id', Auth::user()->company_id )->where('status_id', '!=', 3)->get();

        foreach ($employees as $employee) {
            \Mail::to($employee)->send(new \App\Mail\WeeklyMail($employee, $currentWeek));
        }
    }
}
