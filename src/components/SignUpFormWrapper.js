import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer'

import { BusinessSignUp } from './BusinessSignUp'
import { VolunteerSignUp } from './VolunteerSignUp'

export default function SignUpFormWrapper() {

  // ok
  // here' what we're gonna do
  // we're going to move the logic in this wrapper back to the landing page because we want to be able to animate the drawer transition

  

  const [ drawerOpen, setDrawerOpen ] = useState(true);
  const location = useLocation();
  const history = useHistory();

  const Form = location.pathname === '/signup/business' ? BusinessSignUp : VolunteerSignUp;

  const toggleDrawer = closeDrawer => {
    setDrawerOpen(!drawerOpen)
    history.push('/');
    console.log('toggle drawer', closeDrawer);
  }
    
  return (
    <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer()}>
      <Form />
    </Drawer>
  );

  // if (location.pathname === '/signup/business') {
  //   return <BusinessSignUp />;
  // } else {
  //   return <VolunteerSignUp />;
  // }
}
