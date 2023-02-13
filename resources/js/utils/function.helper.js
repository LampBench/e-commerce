export const mappingRules = (formItems) => {
    let rules = {};
    formItems.forEach((item) => {
        rules[item.name] = item.rules;
    });
    return rules;
}

export const mappingPermissions = (permissions, variable) => {
    let permissionsData = '';
    for (const [module, value] of Object.entries(permissions)) {
        for (const [permission, checked] of Object.entries(value)) {
            if (checked.checked) {
                permissionsData += `${variable}[${module}][]=${permission}&`;
            }
        }
    }

    permissionsData = permissionsData.slice(0, -1);

    return permissionsData;
}

export const mappingPermissionsToArray = (permission) => {
    let permissions = {};
    for (const [module, value] of Object.entries(permission)) {
        for (const [permission, checked] of Object.entries(value)) {
            if (checked.checked) {
                permissions[module] = permissions[module] || [];
                permissions[module].push(permission);
            }
        }
    }

    return permissions;
}