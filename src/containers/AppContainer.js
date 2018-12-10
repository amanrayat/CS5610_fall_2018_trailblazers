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
import BreweryDetail from "../components/BreweryDetail/BreweryDetail";
import SearchResult from "../components/SearchResult/SearchResult";
import BeerDetail from "../components/BeerDetail/BeerDetail";
import UserDetail from "../components/UserDetails/UserDetails";
export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
        <UnauthenticatedRoute path="/register" exact component={Register} props={childProps} />
        <AppliedRoute path="/home" exact component = {Home} props={childProps}/>
        <AuthenticatedRoute path="/profile" exact component={Profile} props={childProps} />
        <AppliedRoute path="/profile/:profileId" exact component={Profile} props={childProps} />
        <AppliedRoute path="/user-detail/:userId" exact component={UserDetail} props={childProps} />
        <AppliedRoute path = "/admin" exact component = {Admin} props = {childProps}/>
        <AppliedRoute path='/search-results' exact component = {SearchResult} props = {childProps} />
        <AppliedRoute path = '/beer/:beerId' exact component = {BeerDetail} props = {childProps}/>
        <AppliedRoute path = '/brewery/:breweryId' exact component = {BreweryDetail} props = {childProps}/>
        <Route component={NotFound} />
    </Switch>;