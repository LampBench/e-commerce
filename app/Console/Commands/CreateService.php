<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateService extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:service {name} {--E|extend=BaseService}';

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
        if (file_exists(app_path('Services/' . $name . '.php'))) {
            $this->error('Service already exists!');
            return 0;
        }
        $stub = file_get_contents(app_path('Console/Commands/Stubs/CoreService.stub'));
        $stub = str_replace('{className}', $name, $stub);

        $extend = $this->option('extend');
        $use = '';
        if ($extend) {
            if (!file_exists(app_path('Classes/' . $extend . '.php'))) {
                $this->error('Service to extend does not exist!');
                return 0;
            }
            $use = "\r\nuse App\Classes\\" . $extend . ";\r\n";
            $stub = str_replace('{extends}', ' extends ' . $extend, $stub);
        } else {
            $stub = str_replace('{extends}', '', $stub);
        }
        $stub = str_replace('{use}', $use, $stub);

        file_put_contents(app_path('Services/' . $name . '.php'), $stub);
        $this->info('Service created successfully.');
    }
}
