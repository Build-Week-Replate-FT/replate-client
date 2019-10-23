import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  makeDonationBox: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export function BusinessDashboard() {
  const classes = useStyles();

  const [ location, setLocation ] = useState({
    address: '123 Abc Ave.',
    city: 'Wallaby',
    state: 'CA',
    zip: '90001'
  });

  useEffect(() => {
    // for fetching data later
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
      
      <Box>
        <Paper>
          <h4>Office Location</h4>
          <p>Street: {location.address}</p>
          <p>City: {location.city}</p>
          <p>State: {location.state}</p>
          <p>Zip: {location.zip}</p>
        </Paper>
      </Box>

      <Box>
        <Paper>
          <h4>Pick Up Schedule</h4>
          <Box className={classes.makeDonationBox}>
            <p>Make a Donation</p>
            <Fab color="primary" size='small' aria-label="add" className={classes.fab}>
              <AddIcon />
            </Fab>
          </Box>
        </Paper>
      </Box>

    </Container>
  );
}