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