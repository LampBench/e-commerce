<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateRepository extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repository {name} {--M|model=} {--E|extends=} {--I|implements=}';

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
        if (!file_exists(app_path('Repositories'))) {
            mkdir(app_path('Repositories'));
        }

        $path = app_path('Repositories/' . $name . '.php');
        if (file_exists($path)) {
            $this->error('Repository already exists!');
            return false;
        }

        $stub = file_get_contents(app_path('Console/Commands/Stubs/CoreRepository.stub'));
        $stub = str_replace('{namespace}', 'App\Repositories', $stub);
        $stub = str_replace("{nameRepository}", $name, $stub);

        if ($this->option('model')) {
            $model =  ucfirst($this->option('model'));
            $useModel = "\ruse App\Models\\$model;";
            $stub = str_replace('{useModel}', $useModel, $stub);
            $stub = str_replace('{model}', $model . ' $model', $stub);
        } else {
            $stub = str_replace('{useModel}', '', $stub);
            $stub = str_replace('{model}', '$model', $stub);
        }

        if ($this->option('extends')) {
            $className = $this->option('extends');
            if (!file_exists(app_path('Repositories/' . $className . '.php'))) {
                $this->error('This Repositories not exists!');
                return false;
            }
            $extend = "extends $className";
            $stub = str_replace('{extends}', $extend, $stub);
            $stub = str_replace('{useExtend}', "\ruse App\Repositories\\" . $className . ';', $stub);
        } else {
            $stub = str_replace('{extends}', '', $stub);
            $stub = str_replace('{useExtend}', '', $stub);
        }

        if ($this->option('implements')) {
            $className = $this->option('implements');
            if (!file_exists(app_path('Interfaces/' . $className . '.php'))) {
                $this->error('This Interface not exists!');
                return false;
            }
            $implements = "implements $className";
            $stub = str_replace('{implements}', $implements, $stub);
            $stub = str_replace('{useInterface}', "\ruse App\Interfaces\\" . $className . ';', $stub);
        } else {
            $stub = str_replace('{useInterface}', '', $stub);
            $stub = str_replace('{implements}', '', $stub);
        }

        file_put_contents($path, $stub);
    }
}
