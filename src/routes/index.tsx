import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignOut from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import ForgotPassword from '../pages/ForgotPassword';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/signup" component={SignOut}/>
    <Route path="/forgot-password" component={ForgotPassword}/>
    <Route path="/dashboard" component={Dashboard} isPrivate/>
    <Route path="/reset-password" component={ResetPassword}/>

  </Switch>
);

export default Routes;
