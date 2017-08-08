<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Company::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->company,
    ];
});

$factory->define(App\Department::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'company_id' => $companyId = rand(1, 5),
    ];
});

$factory->define(App\Status::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
    ];
});

$factory->define(App\Employee::class, function (Faker\Generator $faker) {
    static $password;
    return [
        'department_id' => rand(1, 25),
        'status_id' => rand(1, 2),
        'name' => $faker->name,
        'last_name' => $faker->word,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Suggestion::class, function (Faker\Generator $faker) {
    return [
        'description' => str_random(5),
    ];
});

$factory->define(App\Mood::class, function () {
    return [
        'employee_id' => $employeeId = rand(1, 10),
        'suggestion_id' => $suggestionId = rand(1, 70),
        'point' => rand(1, 5),
        'week' => rand(1, 12),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Tag::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
    ];
});

$factory->define(App\MoodTag::class, function () {
    return [
        'tag_id' => $tagId = rand(1, 7),
        'mood_id' => $moodId = rand(1, 70),
    ];
});


