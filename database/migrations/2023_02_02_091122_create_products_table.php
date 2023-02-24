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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->nullable()->constrained('categories');
            $table->foreignId('manufacturer_id')->nullable()->constrained('manufacturers');
            $table->enum('status', [1, 2, 3])->default(1);
            $table->string('name', 255);
            $table->string('summary')->nullable();
            $table->double('price');
            $table->text('photos')->nullable();
            $table->integer('quantity')->default(0);
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
