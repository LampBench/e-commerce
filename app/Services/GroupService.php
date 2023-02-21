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

    public function mapPermissions($rawPermissions) {
        $modules = $this->getModuleList();
        $roleListArr = [
            'view' => 'View',
            'create' => 'Create',
            'update' => 'Update',
            'delete' => 'Delete',
        ];
        $groupPermission = json_decode($rawPermissions, true);
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

    public function getPermissionList($id) {
        $group = $this->show($id);
        $permissionList = $this->mapPermissions($group->permissions);
        return $permissionList;
    }

    public function convertToPermissionArray($data) {
        if(!empty($data)) {
            $permissionArr = $data;
            $permissionArr['dashboard'] = ['view'];
        } else {
            $permissionArr = [];
            $permissionArr['dashboard'] = [];
        }

        return json_encode($permissionArr);
    }

    public function update($data, $id) {
        $group = $this->show($id);
        if (isset($data['permissions'])) {
            $group->permissions = $this->convertToPermissionArray($data['permissions']);
        }
        if (isset($data['name'])) {
            $group->name = $data['name'];
        }
        if (isset($data['description'])) {
            $group->description = $data['description'];
        }
        $group->save();
        return $group;
    }

    public function create($data) {
        $permissionJson = $this->convertToPermissionArray($data['permissions']);
        $groupData = [
            'name' => $data['name'],
            'description' => $data['description'],
            'permissions' => $permissionJson,
        ];
        $group = $this->repository->create($groupData);
        return $group;
    }

    public function getModules()
    {
        $moduleList = $this->mapPermissions('');
        return $moduleList;
    }
}