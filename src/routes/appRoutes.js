import React from 'react';
import { useSelector } from 'react-redux';
import { PublicRoutes } from './publicRoutes';
import { AuthenticatedRoutes } from './authenticatedRoutes';
import { Navbar } from '../components';

export function AppRoutes() {
  const { user } = useSelector(state => state.authentication);
  return (
    <>
      <Navbar />
      {user.userType ? <AuthenticatedRoutes /> : <PublicRoutes />}
    </>
  );
}
