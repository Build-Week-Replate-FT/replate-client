import React from "react";
import { Switch, Route } from "react-router-dom";

import { LandingPage } from "../components";

export function PublicRoutes() {
  return (
    <Switch>
      <Route path="/signup/business" component={LandingPage} />
      <Route path="/signup/volunteer" component={LandingPage} />
      <Route path="/login" component={LandingPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}
