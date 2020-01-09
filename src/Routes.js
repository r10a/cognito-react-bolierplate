import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './components/landing/Index';
import SignUp from './components/landing/SignUp';
import SignIn from './components/landing/SignIn';
import Dashboard from './components/dashboard/Dashboard';

const AppliedRoute = ({ component: C, appProps, ...rest }) => {
    return <Route {...rest} render={props => <C {...props} {...appProps} />} />;
}

const NotFound = () => {
    return <div>You are not supposed to be here!</div>
}

export const URL = {
    HOME: "/",
    SIGNUP: "/sign-up",
    SIGNIN: "/sign-in",
    DASHBOARD: "/dashboard"
};

export default ({ appProps }) => {
    const { isAuthenticated, userHasAuthenticated } = appProps;
    return (
        <Switch>
            <AppliedRoute path={URL.HOME} exact component={Index} appProps={{ isAuthenticated }} />
            <AppliedRoute path={URL.SIGNUP} exact component={SignUp} appProps={{ isAuthenticated, userHasAuthenticated }} />
            <AppliedRoute path={URL.SIGNIN} exact component={SignIn} appProps={{ isAuthenticated, userHasAuthenticated }} />
            <AppliedRoute path={URL.DASHBOARD} exact component={Dashboard} appProps={appProps} />
            <Route component={NotFound} />
        </Switch>
    );
};