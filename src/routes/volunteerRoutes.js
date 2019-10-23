import React from 'react';
import { Route } from 'react-router-dom';
import { VolunteerDashboard } from '../components';

export default function VolunteerRoutes() {
  return (
    <>
      <Route path='/' render={() => <VolunteerDashboard /> } />
    </>
  );
}
