import React from 'react';
import { useSelector } from 'react-redux';
import { PublicRoutes } from './publicRoutes';
import { AuthenticatedRoutes } from './authenticatedRoutes';

export function AppRoutes() {
  const { user } = useSelector(state => state.authentication);
  return user.role ? <AuthenticatedRoutes /> : <PublicRoutes />;
}
