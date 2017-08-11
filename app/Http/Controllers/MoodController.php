<?php

namespace App\Http\Controllers;

use App\Employee;
use App\Mood;
use App\Suggestion;
use Illuminate\Http\Request;

class MoodController extends Controller
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
        $suggestion = Suggestion::create(
            [
                'description' => $request->suggestion,
            ]
        );

         Mood::create(
            [
                'employee_id' => $request->employeeId,
                'point' => (int)$request->point,
                'week' => $request->week,
                'suggestion_id' => $suggestion->id,
                'remember_token'=> str_random(30)
            ]
        );

        $vote = Employee::find($request->employeeId);
        $vote->update([
            'weekly_voted' => true
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mood $mood
     * @return \Illuminate\Http\Response
     */
    public function show($employeeId)
    {
        $totalPoint = 0;
        $mood = [];

        $moodList = Mood::with('employee')
            ->whereHas('employee', function ($query) use ($employeeId) {
                $query->where('employee_id', $employeeId);
            })->get();


        $json = json_decode($moodList, true);

        for ($i = 0; $i < count($json); $i++) {
            $totalPoint = $totalPoint + $json[$i]['point'];
        }

        if ($totalPoint != 0) {
            $averageMood = round($totalPoint / count($json));
        }

        for ($i = 0; $i < count($json); $i++) {
            $mood[] = array(
                'employee_id' => $json[0]['employee_id'],
                'average' => $averageMood,
                'point' => $json[$i]['point'],
                'date' => array(
                    'week' => $json[$i]['week'],
                    'createdAt' => $json[$i]['created_at'],
                    'updatedAt' => $json[$i]['updated_at'],
                )
            );
        }
        return response()->json($mood);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mood $mood
     * @return \Illuminate\Http\Response
     */
    public function edit(Mood $mood)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Mood $mood
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mood $mood)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mood $mood
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mood $mood)
    {
        //
    }
}
