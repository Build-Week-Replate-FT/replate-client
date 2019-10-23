import React from "react";
import { Route } from "react-router-dom";
import { SecondaryPage } from "../components";

export default function VolunteerRoutes() {
  return (
    <>
      <Route path="/volunteer" component={SecondaryPage} />
    </>
  );
}
