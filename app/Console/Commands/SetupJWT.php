<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SetupJWT extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'setup-jwt';

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
        $this->info('Update composer...');
        exec('composer install');
        $this->info('Update composer... Done');
        $this->info('Generate key...');
        exec('php artisan jwt:secret --force');
        $this->info('Generate key... Done');
    }
}
