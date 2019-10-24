import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { axiosWithAuth } from '../utils';

const useStyles = makeStyles(theme => ({
  paper: {
    // background: 'aliceblue'
  },
  card: {
    // background: '#23293B',
    color: '#23293B'
  },
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

export function VolunteerDashboard() {
  const classes = useStyles();
  const { user } = useSelector(state => state.authentication);
  console.log(user);
  
  const [ pickups, setPickups ] = useState([]);
  const [ businesses, setBusinesses ] = useState([]);
  

  useEffect(() => {
    axiosWithAuth('https://replate-server.herokuapp.com/')
      .get('pickups/pickups')
      .then(({ data }) => {
        console.log('pickup data:', data);
        setPickups(data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axiosWithAuth('https://replate-server.herokuapp.com/')
    .get('business/businesses')
    .then(({ data }) => {
      console.log('business data:', data);
      setBusinesses(data);
    }) 
  }, []);

  return (
    <Container>
      <h1>Volunteer Dashboard</h1>

      <Box>
        <Paper className={classes.paper}>
          <h4>My Pickups</h4>
          <Grid container justify="flex-start" spacing={2}>
            {pickups.map(pickup => (
              pickup.volunteer && pickup.volunteer.userid === user.userid && 
                <Grid item key={pickup.pickupid}>
                    <Card className={classes.card}>
                      <CardContent>
                        <h2>{pickup.foodtype}</h2>
                        <p>{pickup.quantity} {pickup.quantityunit}</p>
                      </CardContent>
                    </Card>
                </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
      
      <Box>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h2>All Requests</h2>
                <Grid container spacing={2}>
                  {pickups.map(pickup => (
                    !pickup.volunteer && 
                    <Grid item key={pickup.pickupid}>
                      <Card className={classes.card}>
                        <CardContent>
                          <h2>{pickup.foodtype}</h2>
                          <p>{pickup.quantity} {pickup.quantityunit}</p>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
            
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h2>Local Businesses</h2>
                <Grid container spacing={2}>
                  {businesses.map(business => (
                    <Grid item key={business.userid}>
                      <Card className={classes.card}>
                        <CardContent>
                          <h2>{business.name}</h2>
                          <p>{business.email}</p>
                          <p>{business.address}</p>
                          <p>{business.city}, {business.state} {business.zip}</p>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
      </Box>
    </Container>
  );
}
