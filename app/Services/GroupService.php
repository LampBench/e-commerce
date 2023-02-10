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
        $permissionJson = $this->convertToPermissionArray($data);
        $group = $this->show($id);
        $group->permissions = $permissionJson;
        $group->save();

        return $group->permissions;
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
}