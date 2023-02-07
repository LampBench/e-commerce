import React from 'react';
import { useSelector } from 'react-redux';
import { redirect } from "react-router-dom";

const withPermission = (allowedRoles) => (Component) => {
    return (props) => {
        const user = useSelector((state) => state.user.data);
        if (user && allowedRoles.includes(user.role)) {
            return <Component {...props} />;
        } else {
            user ? redirect('/403') : window.location.href = '/login';
        }
    };
};

export default withPermission;
