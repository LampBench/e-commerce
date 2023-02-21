export const getRouteKey = (paths) => {
    switch (paths.length) {
        case 2:
            return paths[1];
        case 3:
            return `${paths[1]}-${paths[2]}`;
        case 4:
            return paths[3] === 'create' ? `${paths[2]}-${paths[3]}` : `${paths[1]}-${paths[2]}`;
        case 5:
            return `${paths[1]}-${paths[2]}`;
        default:
            return 'admin';
    }
};