import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VolunteerRoutes = React.lazy(() => import('./volunteerRoutes'));
const BusinessRoutes = React.lazy(() => import('./businessRoutes'));

export function AuthenticatedRoutes() {
  const { user } = useSelector(state => state.authentication);
  const AuthenticatedRoutes = user.userType === 'volunteer' ? VolunteerRoutes : BusinessRoutes;

  return (
    <>
      <Switch>
        <Route path='/profile' render={() => <div>Profile page</div>} />
        <Suspense fallback={<div>Loading authenticated app..</div>}>
          <AuthenticatedRoutes />
        </Suspense>
      </Switch>
    </>
  );
}
