
import Auth from 'screens/auth';

import Login from 'screens/auth/screens/login';
import React from 'react';
import {Route} from 'react-router';
import Register from 'screens/auth/screens/regis';
export default [
  <Route component={Auth}>
    <Route path='/web/login' component={Login} />
    <Route path='/web/register' component={Register} />
  </Route>
];
