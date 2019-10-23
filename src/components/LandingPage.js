import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Link, useLocation, useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'

import { LoginForm } from './LoginForm'
import { BusinessSignUp } from './BusinessSignUp'
import { VolunteerSignUp } from './VolunteerSignUp'

const useStyles = makeStyles(theme => ({
  landingContainer: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    width: '100%',
  },
  formContainer: {
    width: '500px'
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '800px',
    margin: '25px 0'
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: '350px',
    height: '350px',
    boxShadow: '0 0 10px grey',
    textDecoration: 'none'
  }
}))

export function LandingPage() {

  const classes = useStyles();
  const [ drawerOpen, setDrawerOpen ] = useState(false);
  const location = useLocation();
  const history = useHistory();

  let Form;

  switch (location.pathname) {
    case '/signup/business':
      Form = <BusinessSignUp />;
      break;

    case '/signup/volunteer':
      Form = <VolunteerSignUp />;
      break;
    
    case '/login':
      Form = <LoginForm />
      break;

    default:
      Form = <Container className={classes.formContainer}/>;
  }

  useEffect(() => {
    location.pathname !== '/' ? setDrawerOpen(true) : setDrawerOpen(false);
  }, [location.pathname])

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
    history.push('/');
    console.log('toggle drawer');
  }

  return (
    <Container className={classes.landingContainer}>
      <h2 className={classes.title}>Landing Page</h2>

      <div className={classes.linkContainer}>
        <div className={classes.linkContainer}>
          <Link className={classes.box} to='/signup/business' onClick={() => setDrawerOpen(true)}>I am a Business</Link>
        </div>
      
        <div className={classes.linkContainer}>
          <Link className={classes.box} to='/signup/volunteer' onClick={() => setDrawerOpen(true)}>I am a Volunteer</Link>
        </div>
      </div>

      <Link className={classes.title} to='/login' onClick={() => (setDrawerOpen(true))}>Already an existing member?</Link> 

      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer()}>
        {Form} 
      </Drawer>

    </Container>
  );
}
