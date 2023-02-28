<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Category;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\User;
use App\Models\UserGroup;
use App\Models\Manufacturer;
use App\Policies\CategoryPolicy;
use App\Policies\UserPolicy;
use App\Policies\GroupPolicy;
use App\Policies\ManufacturerPolicy;
use Laravel\Passport\Passport;

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
        Manufacturer::class => ManufacturerPolicy::class,
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

        Passport::ignoreRoutes();
        Passport::tokensExpireIn(now()->addDays(15));
        Passport::refreshTokensExpireIn(now()->addDays(30));
        Passport::personalAccessTokensExpireIn(now()->addMonths(6));

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

                    return false;
                });
            }
        }
    }
}
