import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const withPermission = (allowedRoles) => (Component) => {
    return (props) => {
        const user = useSelector((state) => state.user.data);
        if (user && allowedRoles.includes(user.role)) {
            return <Component {...props} />;
        } else {
            if(user) {
                return <Navigate to="/403" />;
            } else {
                return <Navigate to="/login" />;
            }
        }
    };
};

export default withPermission;
