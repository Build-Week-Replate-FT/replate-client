import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Link, useLocation, useHistory } from 'react-router-dom';
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

  // and we're going ot move the routes to the top level routing
  // sorry it's messy :) 

  // let's look at the browser soorry

  // not totally sure what the issue is with the code

  // we're now automatically rendering the Volunteer form because of the ternary statement. just fyi
  // switch or if else if, doesn't matter. or set form to null and do two ifs. lots of ways

  // talk to me goose lol - duuuhhhhhh - nice.either that or useEffect. yeah to watch the path name and set state

  // in this case i want to pass the boolean and not the opposit of the current state because if we're on one route,
  // and we switch to another. if we pass the opposite of state it would close the drawer
 // we still have a bug
 // when you press the browser back button, the form stays open but the route change. this is where useEffect would come in handy
 // if pathname !== '/' open the drawer
 // else close the drawer

 // right?

 // because if the pathname is the index path '/', we want to set the drawer to closed. otherwise let's open 
//  ohhh we don't need useeffect here technically

// we need useEffect lol. because the form is still technically open
// think you can take it from here?
// cool. you have the right idea with what to watch in the useEffect. yep!
// yeppers was gonna drop an emoji :(

  const [ drawerOpen, setDrawerOpen ] = useState(false);
  const location = useLocation();
  const history = useHistory();

  console.log(location)

  let Form = null
  if(location.pathname === '/signup/business') Form = <BusinessSignUp/>
  if(location.pathname === '/signup/volunteer') Form = <VolunteerSignUp/>
  
  useEffect(() => {
    if (location.pathname !== '/') {
      setDrawerOpen(true);
    }
  }, [location])


  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
    history.push('/');
    console.log('toggle drawer');
  }

  return (
    <>
      <section>
        <h2>Landing Page</h2>
        <Link to='/signup/business' onClick={()=>setDrawerOpen(true)}>I am a Business</Link>
        <br />
        <Link to='/signup/volunteer' onClick={()=>setDrawerOpen(true)}>I am a Volunteer</Link>

        <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer()}>
          {Form} 
        </Drawer>

      </section>

    </>
  );
}
