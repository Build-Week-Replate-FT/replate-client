import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LandingPage, SecondaryPage, BusinessSignUp, VolunteerSignUp } from './components';

export default function Routes() {
  return (
    <Switch>
      <Route path='/BusinessSignUp' component={BusinessSignUp} />
      <Route path='/VolunteerSignUp' component={VolunteerSignUp} />
      <Route path='/page2' component={SecondaryPage} />
      <Route path='/' component={LandingPage} />
    </Switch>
  );
}
