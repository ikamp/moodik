<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMoodTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mood', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('employee_id');
            $table->integer('suggestion_id');
            $table->integer('point');
            $table->integer('week');
            $table->timestamps();

            $table->foreign('employee_id')->references('id')->on('employee');
            $table->foreign('suggestion_id')->references('id')->on('suggestion');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mood');
    }
}
