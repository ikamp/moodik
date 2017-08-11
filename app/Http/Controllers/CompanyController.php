<?php

namespace App\Http\Controllers;

use App\Department;
use App\Employee;
use App\Mood;
use Illuminate\Support\Facades\DB;
use App\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
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
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Department::create([
            'company_id' => $request->companyId,
            'name' => $request->name,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Company $company
     * @return \Illuminate\Http\Response
     */
    public function show($companyId)
    {
        $companyMood = [];
        $moodTagArray = [];
        $companyMoodList = Mood::with(
            'suggestion',
            'moodTag.tags',
            'employee.department.company'
        )->whereHas('employee.company', function ($query) use ($companyId) {
            $query->where('id', $companyId);
        })->get();

        $json = json_decode($companyMoodList, true);

        for ($i = 1; $i < count($json); $i++) {
            for ($j = 0; $j < sizeof($json[$i]['mood_tag']['tags']); $j++) {
                $companyMood[] = array(
                    'id' => $json[$i]['id'],
                    'suggestion' => $json[$i]['suggestion'],
                    'point' => $json[$i]['point'],
                    'week' => $json[$i]['week'],
                    'voted' => $json[$i]['employee']['weekly_voted'],
                    'moodDate' => $json[$i]['created_at'],
                    'moodTag' => $json[$i]['mood_tag']['tags'][$j]['name']
                );
            }
        }
        return response()->json($companyMood);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Company $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Company $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $employee = Employee::where('id', $request->employeeId)->first();
        $employee->department_id = $request->departmentId;
        $employee->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Company $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        //
    }
}
