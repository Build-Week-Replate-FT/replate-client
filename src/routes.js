import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LandingPage, SecondaryPage, BusinessSignUp, VolunteerSignUp, LoginForm, BusinessDashboard } from './components';

export default function Routes() {
  return (
    <Switch>
      <Route path='/page2' component={SecondaryPage} />
      <Route path='/dashboard/business' component={BusinessDashboard} />
      <Route path='/signup/business' component={LandingPage} />
      <Route path='/signup/volunteer' component={LandingPage} />
      <Route path='/login' component={LandingPage} />
      <Route path='/' component={LandingPage} />
    </Switch>
  );
}
