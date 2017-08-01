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
        factory(App\Status::class, 2)->create();
        factory(App\Employee::class, 25)->create();
        factory(App\Suggestion::class, 25)->create();
        factory(App\Mood::class, 25)->create();
        factory(App\Tag::class, 25)->create();
        factory(App\MoodTag::class, 25)->create();
    }
}
