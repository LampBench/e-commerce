<?php

namespace App\Services;

use App\Classes\BaseService;
use App\Repositories\GroupRepository;

class GroupService extends BaseService {

    public function __construct(GroupRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getModuleList()
    {
        $moduleList = config('modules');
        return $moduleList;
    }

    public function getPermissionList($id) {
        $modules = $this->getModuleList();
        $group = $this->show($id);
        $roleListArr = [
            'view' => 'View',
            'create' => 'Create',
            'update' => 'Update',
            'delete' => 'Delete',
        ];
        $groupPermission = json_decode($group->permissions, true);
        $permissionList = [];
        foreach ($modules as $module) {
            $permissionList[$module['name']] = [];
            foreach ($roleListArr as $role => $roleName) {
                $permissionList[$module['name']][$role] = [
                    'name' => $roleName,
                    'checked' => isset($groupPermission[$module['name']]) && in_array($role, $groupPermission[$module['name']]) ? true : false,
                ];
            }
        }

        return $permissionList;
    }

    public function updatePermission($id, $data) {
        if (!empty($data)) {
            $roleArr = $data;
            $roleArr['dashboard'] = ['view'];
        } else {
            $roleArr = [];
            $roleArr['dashboard'] = [];
        }

        $roleJson = json_encode($roleArr);
        
        $group = $this->show($id);
        $group->permissions = $roleJson;
        $group->save();

        return $group->permissions;
    }
}