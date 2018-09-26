<?php

use Illuminate\Database\Seeder;

class test_table_reacts_seed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('test_table_reacts')->insert([
            array('name' => 'ahihi','tel' => '1231312312312','Permission' => 'admin'),
            array('name' => 'ahihi2','tel' => '1231312312312','Permission' => 'admin'),
            array('name' => 'ahihi3','tel' => '1231312312312','Permission' => 'user2'),
            array('name' => 'ahihi4','tel' => '1231312312312','Permission' => 'admin'),
            array('name' => 'ahihi5','tel' => '1231312312312','Permission' => 'user')
        ]);
    }
}
