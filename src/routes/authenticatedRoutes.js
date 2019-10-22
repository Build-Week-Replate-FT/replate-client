import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { PublicRoutes } from './publicRoutes';

const VolunteerRoutes = React.lazy(() => import('./volunteerRoutes'));
const BusinessRoutes = React.lazy(() => import('./businessRoutes'));

export function AuthenticatedRoutes() {
  const { user } = useSelector(state => state.authentication);
  const AuthenticatedRoutes = user.role === 'volunteer' ? VolunteerRoutes : BusinessRoutes;

  return (
    <>
      <PublicRoutes />
      <Suspense fallback={<div>Loading authenticated app..</div>}>
        <AuthenticatedRoutes />
      </Suspense>
    </>
  );
}
