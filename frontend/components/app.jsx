import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/routes/routes_util';

import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/" component={SplashContainer} />
      </Switch>
    </div>
  );
};

export default App;
