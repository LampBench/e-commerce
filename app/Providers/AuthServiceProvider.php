<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Category;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\User;
use App\Models\UserGroup;
use App\Policies\CategoryPolicy;
use App\Policies\UserPolicy;
use App\Policies\GroupPolicy;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        User::class => UserPolicy::class,
        UserGroup::class => GroupPolicy::class,
        Category::class => CategoryPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        $moduleList = config('modules');

        if (count($moduleList) > 0) {
            foreach ($moduleList as $module) {
                Gate::define($module['name'], function (User $user) use ($module) {
                    $roleJson = $user->group->permissions;

                    if (!empty($roleJson)) {
                        $roleArr = json_decode($roleJson, true);
                        $check = isRole($roleArr, $module['name']);
                        return $check;
                    }

                    return true;
                });
            }
        }
    }
}
