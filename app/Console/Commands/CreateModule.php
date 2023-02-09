<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Module;

class CreateModule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:module {name} {title} {--description}';

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
        $title = $this->argument('title');
        $description = $this->option('description');

        $module = Module::create([
            'name' => $name,
            'title' => $title,
            'description' => $description,
        ]);

        $this->info("Module {$module->name} created successfully.");
    }
}
