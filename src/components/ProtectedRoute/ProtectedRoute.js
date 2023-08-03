import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
    return (
        localStorage.getItem('token') ? <Component {...props} /> : <Navigate to="/404" replace/>
    )
}

export default ProtectedRouteElement;