<?php

namespace App\Http\Controllers;

use App\Department;
use App\Employee;
use App\EmployeeActivation;
use App\Mail\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Department::where('company_id', '=', Auth::user()->company_id)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $employee = Employee::create(
            [
                'status_id' => 2,
                'company_id' => Auth::user()->company_id,
                'department_id' => $request->employeeDepartment,
                'name' => $request->employeeName,
                'last_name' => $request->employeeLastname,
                'email' => $request->employeeEmail,
            ]
        );

        $activation = EmployeeActivation::create(
            [
                'employee_id' => $employee->id,
                'token' => str_random(30),
            ]
        );

        $manager = Auth::user();

        \Mail::to($employee)->send(new \App\Mail\Invitation($manager, $employee, $activation));

        return $employee;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee $employee
     * @return \Illuminate\Http\Response
     */
    public function show($companyId)
    {
        $employeeList = Employee::where(
            'company_id',
            '=',
            $companyId
        )->where(
            'status_id',
            '!=',
            '3'
        )->get();
        return response()->json($employeeList);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Employee $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Employee $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $employee = Employee::where('id', $request->id)->first();
        $employee->status_id = 3;
        $employee->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employee $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
