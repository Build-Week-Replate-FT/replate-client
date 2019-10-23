import React from 'react';
import { Route } from 'react-router-dom';

export default function VolunteerRoutes() {
  return (
    <>
      <Route path='/volunteer' render={() => <div>volunteer dashboard</div>} />
    </>
  );
}
