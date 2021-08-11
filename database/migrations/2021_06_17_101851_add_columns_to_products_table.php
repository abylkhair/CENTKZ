<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->date('date')->nullable();
            $table->string('recommended_list')->default('');
            $table->string('href')->nullable();
            $table->string('short_desc')->default('');
            $table->string('botanbutton')->default('Заказать');
            $table->string('button_desc')->nullable();
            $table->string('title_card')->nullable();
            $table->string('title_desc')->nullable();
            $table->string('image')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            Schema::dropIfExists('date');
            Schema::dropIfExists('recommended_list');
            Schema::dropIfExists('href');
            Schema::dropIfExists('short_desc');
            Schema::dropIfExists('title_desc');
            Schema::dropIfExists('botanbutton');
            Schema::dropIfExists('botandesc');
            Schema::dropIfExists('recommended_list');
            Schema::dropIfExists('image');
        });
    }
}
