import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LandingPage, SecondaryPage, BusinessSignUp, VolunteerSignUp } from './components';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/page2' component={SecondaryPage} />
      <Route path='/BusinessSignUp' component={BusinessSignUp} />
      <Route path='/VolunteerSignUp' component={VolunteerSignUp} />
    </Switch>
  );
}
