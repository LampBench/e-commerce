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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->nullable()->constrained('categories');
            $table->foreignId('author_id')->nullable()->constrained('authors');
            $table->enum('status', [1, 2, 3])->default(1);
            $table->string('book_title', 255);
            $table->string('book_summary')->nullable();
            $table->double('book_price');
            $table->string('book_cover_photo', 20)->nullable();
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
        Schema::dropIfExists('books');
    }
};
