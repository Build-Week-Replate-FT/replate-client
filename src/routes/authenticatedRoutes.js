import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { PublicRoutes } from "./publicRoutes";

const VolunteerRoutes = React.lazy(() => import("./volunteerRoutes"));
const BusinessRoutes = React.lazy(() => import("./businessRoutes"));

const user = {
  role: "business"
};
export function AuthenticatedRoutes() {
  // const { user } = useSelector(state => state.authentication);
  const AuthenticatedRoutes =
    user.role === "volunteer" ? VolunteerRoutes : BusinessRoutes;

  return (
    <Switch>
      <Suspense fallback={<div>Loading authenticated app..</div>}>
        <AuthenticatedRoutes />
      </Suspense>
    </Switch>
  );
}
