<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateInterface extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:interface {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = $this->argument('name');
        if (!file_exists(app_path('Interfaces'))) {
            mkdir(app_path('Interfaces'));
        }
        $path = app_path('Interfaces/' . $name . '.php');

        if (file_exists($path)) {
            $this->error('Interface already exists!');
            return false;
        }

        $stub = file_get_contents(app_path('Console/Commands/Stubs/CoreInterface.stub'));
        $stub = str_replace('{namespace}', 'App\Interfaces', $stub);
        $stub = str_replace('{name}', $name, $stub);

        file_put_contents($path, $stub);
    }
}
