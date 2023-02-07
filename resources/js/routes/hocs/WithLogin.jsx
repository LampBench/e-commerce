import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

// Không sử dụng được redirect vì đường link không đổi


const withLogin = () => (Component) => {
    return (props) => {
        const user = useSelector((state) => state.user.data);
        if (user) {
            <Navigate to='/'replace={true}/>
        } else {
            return <Component {...props} />;
        }
    };
};

export default withLogin;
