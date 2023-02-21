<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->string('code')->unique();
            $table->enum('type', [1, 2])->default(1)->comment('1: fixed amount, 2: percentage');
            $table->string('scope')->nullable();
            $table->double('value');
            $table->dateTime('start_date');
            $table->dateTime('end_date')->nullable();
            $table->enum('status', [1, 2])->default(1)->comment('1: active, 2: inactive');
            $table->integer('limit')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vouchers');
    }
};
