import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const withPermission = (module, allowedPermission) => (Component) => {
    return (props) => {
        const permissions = useSelector(state => state.user.permissions);
        if (permissions[module] && permissions[module].includes(allowedPermission)) {
            return <Component {...props} selfPermission={permissions} />;
        }
        return <Navigate to="/error/access-denied" />;
    };
};

export default withPermission;
