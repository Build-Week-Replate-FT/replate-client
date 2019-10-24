import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import { axiosWithAuth } from '../utils';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  makeDonationBox: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export function BusinessDashboard() {
  const classes = useStyles();

  const { user } = useSelector(state => state.authentication);
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    axiosWithAuth('https://replate-server.herokuapp.com/')
      .get('pickups/pickups')
      .then(({ data }) => {
        console.log('pickup data:', data);
        setPickups(data);
      })
      .catch(err => console.log(err));
  }, []);
  
  return (
    <Container>
      <h1>Business Dashboard</h1>

      <Box>
        <Paper>
          <h4>Office Location</h4>
          <p>{user.address}</p>
          <p>{user.city}, {user.state} {user.zip}</p>
        </Paper>
      </Box>

      <Box>
        <Paper>
          <h4>Schedule Pickup</h4>
          <Box>
            <Box className={classes.makeDonationBox}>
              <p>Make a Donation</p>
              <Fab color='primary' size='small' aria-label='add' className={classes.fab}>
                <AddIcon />
              </Fab>
            </Box>
            <h4>Scheduled Pickups</h4>
            <Grid container spacing={2}>
              {pickups.map(pickup => (
                <Grid item key={pickup.pickupid}>
                  <Card>
                    <CardContent>
                      <h2>{pickup.foodtype}</h2>
                      <p>{pickup.quantity} {pickup.quantityunit}</p>
                      <p>Pickup Time: {new Date(pickup.postdate).toDateString()}</p>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
