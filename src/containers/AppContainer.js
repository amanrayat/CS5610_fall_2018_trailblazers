import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";
import NotFound from "../components/NotFound/NotFound";
import AppliedRoute from "../components/AppliedRoute";
import AuthenticatedRoute from "../components/AuthenticatedRoute";
import UnauthenticatedRoute from "../components/UnauthenticatedRoute";
import Admin from "../components/Admin/Admin";

export default ({ childProps }) =>
    <Switch>
        {/*<AppliedRoute path="/" exact component={Home} props={childProps} />*/}
        <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
        <UnauthenticatedRoute path="/register" exact component={Register} props={childProps} />
        <AuthenticatedRoute path="/profile" exact component={Profile} props={childProps} />
        <UnauthenticatedRoute path="/profile/:profileId" exact component={Profile} props={childProps} />
        <AppliedRoute path = "/admin" exact component = {Admin} props = {childProps}/>
        {/*<AuthenticatedRoute path="/course/:courseId/edit" exact component={CourseEditor} props={childProps} />*/}
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
    </Switch>;