import React, { useState, useEffect } from 'react';
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

  const [ pickups, setPickups ] = useState([
    {
      id: 1,
      foodType: 'Nachos',
      qty: 20,
      date: '10/23/2019',
    },
    {
      id: 2,
      foodType: 'Tacos',
      qty: 25,
      date: '10/27/2019',
    },
    {
      id: 3,
      foodType: 'Burritos',
      qty: 15,
      date: '11/03/2019',
    },
    {
      id: 4,
      foodType: 'Lemonade',
      qty: 42,
      date: '11/15/2019',
    },
  ]);

  const [ requests, setRequests ] = useState([0,1,2,3,4,5,6]);
  const [ businesses, setBusinesses ] = useState([0,1,2,3,4]);

  return (
    <Container>
      <h1>Volunteer Dashboard</h1>

      <Box>
        <Paper className={classes.paper}>
          <h4>My Pickups</h4>
          <Grid container justify="left" spacing='2'>
            {pickups.map(pickup => (
              <Grid item key={pickup.id}>
                <Card className={classes.card}>
                  <CardContent>
                    <h2>{pickup.foodType}</h2>
                    <p>{pickup.qty}</p>
                    <p>{pickup.date}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
      
      <Box>
        <Paper>
          <Grid container spacing='4'>
            <Grid item xs={6}>
              <Box>
                <Paper className={classes.paper}>
                  <h4>All Requests</h4>
                  {requests.map(request => (
                    <div key={request.id}>This will be a pickup request</div>
                  ))}
                </Paper>
              </Box>
            </Grid>
            
            <Grid item xs={6}>
              <Box>
                <Paper className={classes.paper}>
                  <h4>Local Businesses</h4>
                  {businesses.map(business => (
                    <div key={business.id}>This will be a pickup request</div>
                  ))}
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
