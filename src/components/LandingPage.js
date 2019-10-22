import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Route } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer'
import { BusinessSignUp } from './BusinessSignUp'
import { VolunteerSignUp } from './VolunteerSignUp'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export function LandingPage() {
  
  const [ drawerState, setdrawerState ] = useState(false);
  const [ forms ] = useState({
    business: BusinessSignUp(),
    volunteer: BusinessSignUp()
  });
  const [ signUp, setSignUp ] = useState();

  const toggleDrawer = form => {
    setdrawerState(!drawerState);
    setSignUp(forms[form]);
  }

  return (
    <section>
      <h2>Landing Page</h2>
      <button onClick={() => toggleDrawer('business')}>I am a Business</button>
      <br />
      <button onClick={() => toggleDrawer('volunteer')} >I am a Volunteer</button>

      <Drawer anchor="right" open={drawerState} onClose={() => toggleDrawer(null)}>
        {signUp}
      </Drawer>
    </section>
  );
}
