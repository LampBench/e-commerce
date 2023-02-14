<?php

if(!function_exists('isRole')) {
    function isRole($dataArr, $moduleName, $roleName='view')
    {
        if(!empty($dataArr[$moduleName])) {
            if(!empty($dataArr[$moduleName]) && in_array($roleName, $dataArr[$moduleName])) {
                return true;
            }
        }

        return false;
    }
}

if(!function_exists('getCategories')) {
    function getCategories($dataArr, $parent_id = 0)
    {
        $result = [];
        foreach ($dataArr as $key => $value) {
            if($value['parent_id'] == $parent_id) {
                $result[$key] = $value;
                $result[$key]['children'] = getCategories($dataArr, $value['id']);
            }
        }

        return $result;
    }
}

if(!function_exists('checkPolicy')) {
    function checkPolicy($user, $module, $roleName='view')
    {
        $permissionsJson = json_decode($user->group->permissions, true);
        return isRole($permissionsJson, $module, $roleName) ? true : false;
    }
}