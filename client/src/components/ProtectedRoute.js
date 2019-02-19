import React from "react"
import { Route, Redirect } from "react-router-dom";
import { withDataHandler } from "../DataHandler"

function ProtectedRoute(props) {
    const { component: Component, ...rest } = props;
    return (
        props.user.token ?
            <Route {...rest} component={Component} /> :
            <Redirect to="/auth/login" />
    )
}

export default withDataHandler(ProtectedRoute);