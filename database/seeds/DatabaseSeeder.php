<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Company::class, 5)->create();
        factory(App\Department::class, 25)->create();
        factory(App\Status::class, 3)->create();
        factory(App\Employee::class, 70)->create();
        factory(App\Suggestion::class, 70)->create();
        factory(App\Mood::class, 70)->create();

        DB::table('tag')->insert([
            'name' => 'Career'
        ]);
        DB::table('tag')->insert([
            'name' => 'Colleaugues'
        ]);
        DB::table('tag')->insert([
            'name' => 'Communication'
        ]);
        DB::table('tag')->insert([
            'name' => 'Health'
        ]);
        DB::table('tag')->insert([
            'name' => 'Holidays'
        ]);
        DB::table('tag')->insert([
            'name' => 'Task area/Activity'
        ]);
        DB::table('tag')->insert([
            'name' => 'Work equipment'
        ]);
        DB::table('tag')->insert([
            'name' => 'Working time'
        ]);
        DB::table('tag')->insert([
            'name' => 'Managers'
        ]);
        DB::table('tag')->insert([
            'name' => 'Workload'
        ]);
        DB::table('tag')->insert([
            'name' => 'Work environment'
        ]);
        DB::table('tag')->insert([
            'name' => 'Salary training'
        ]);
        DB::table('tag')->insert([
            'name' => 'Professional training'
        ]);
        DB::table('tag')->insert([
            'name' => 'Others'
        ]);
        DB::table('tag')->insert([
            'name' => 'Organization'
        ]);

        factory(App\MoodTag::class, 70)->create();
    }
}
