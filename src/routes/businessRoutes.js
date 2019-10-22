import React from 'react';
import { Route } from 'react-router-dom';
import { BusinessDashboard } from '../components';

export default function BusinessRoutes() {
  return (
    <>
      <Route path='/business' component={BusinessDashboard} />
    </>
  );
}
