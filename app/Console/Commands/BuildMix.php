<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class BuildMix extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'build:mix';

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
        // Run command: npm run dev && php artisan serve
        $this->info('Building mix...');
        $this->info(shell_exec('npm run dev'));
        $this->info('Starting server...');
        $this->info(shell_exec('php artisan serve -d'));
    }
}
