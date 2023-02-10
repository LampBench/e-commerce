<?php

namespace App\Policies;

use App\Models\User;
use App\Models\UserGroup;
use Illuminate\Auth\Access\HandlesAuthorization;

class GroupPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserGroup  $userGroup
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, UserGroup $userGroup)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        $permissionsJson = json_decode($user->group->permissions, true);
        return isRole($permissionsJson, 'groups', 'create') ? true : false;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserGroup  $userGroup
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user)
    {
        $permissionsJson = json_decode($user->group->permissions, true);
        return isRole($permissionsJson, 'groups', 'update') ? true : false;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserGroup  $userGroup
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, UserGroup $userGroup)
    {
        $group = $user->group;
        $groupName = $group->name;
        $excepts = ['Administrator', 'Moderator', 'Member'];
        if (in_array($groupName, $excepts)) {
            return false;
        }
        $permissionsJson = json_decode($group->permissions, true);
        return isRole($permissionsJson, 'groups', 'delete') ? true : false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserGroup  $userGroup
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, UserGroup $userGroup)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserGroup  $userGroup
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, UserGroup $userGroup)
    {
        //
    }
}
