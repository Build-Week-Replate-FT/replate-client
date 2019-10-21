import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LandingPage, SecondaryPage } from './components';

export default function Routes() {
  return (
    <Switch>
      <Route path='/page2' component={SecondaryPage} />
      <Route path='/' component={LandingPage} />
    </Switch>
  );
}
