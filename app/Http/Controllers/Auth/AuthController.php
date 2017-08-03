<?php

namespace App\Http\Controllers\Auth;

use App\Employee;
use App\EmployeeActivation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function activateUser($token)
    {
        $activate = EmployeeActivation::where('token', $token)->first();

        if ($activate != null) {

            $createdAt = new Carbon($activate->updated_at);
            $now = Carbon::now();
            //added 2 minutes to token's created time and this is our expireDate
            $expireDate = $createdAt->addMinutes(1);

            if ($now->lt($expireDate)) {
                $employee = Employee::find($activate->employee_id);
                $employee->activated = true;
                $employee->save();
                $activate->delete();
                return redirect('/home');
            } else {
                return view('expire');
            }
        }

        throw new \Exception('Activation can not verified');
    }

    public function notActive()
    {
        return view('verify');
    }

    public function newCode()
    {
        $employee = Employee::find(Auth::user()->id);
        $activation = EmployeeActivation::where('employee_id', Auth::user()->id)->first();
        $activation->token = str_random(30);
        $activation->save();
        \Mail::to($employee)->send(new \App\Mail\Verification($employee, $activation));
        return view('verify');
    }
}
