import React from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import {Cookies} from "react-cookie";

const RequireAuth = ({children}) => {
    const location = useLocation();

    const authenticated = () => {
        const cookies = new Cookies();
        const token = cookies.get('token');
        console.log(token, "token");
        let isAuthenticated = false
        if (token) {
            isAuthenticated = true;
        }
        return !isAuthenticated
    }
    if (authenticated()) {
        return <Navigate to={'/'} state={{from: location}} replace/>;
    }

    return children;
};

export default RequireAuth
