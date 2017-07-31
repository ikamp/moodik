<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMoodTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mood_tag', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tag_id');
            $table->integer('mood_id');

            $table->foreign('tag_id')->references('id')->on('tag');
            $table->foreign('mood_id')->references('id')->on('mood');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mood_tag');
    }
}
