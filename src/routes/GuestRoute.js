import React from "react";
import { Route } from "react-router-dom";

import Home from "../pages/Home/index";
import authService from "../services/authService";

function GuestRoute({ element: Component, ...rest }) {
    const isAuthenticated = authService.isAuthenticated();
    console.log(isAuthenticated);
    return <Route {...rest} element={isAuthenticated ? <Home /> : Component} />;
}

export default GuestRoute;
