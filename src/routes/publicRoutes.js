import React from 'react';
import { Route } from 'react-router-dom';

import { LandingPage, BusinessSignUp, VolunteerSignUp } from '../components';

export function PublicRoutes() {
  return (
    <>
      <Route exact path='/' component={LandingPage} />
      <Route path='/BusinessSignUp' component={BusinessSignUp} />
      <Route path='/VolunteerSignUp' component={VolunteerSignUp} />
    </>
  );
}
