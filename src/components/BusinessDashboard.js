import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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

  const [ pickups, setPickups ] =useState([
    {
      id: 1,
      foodType: 'Nachos',
      qty: 20,
      date: '10/23/2019'
    },
    {
      id: 2,
      foodType: 'Tacos',
      qty: 25,
      date: '10/27/2019'
    },
    {
      id: 3,
      foodType: 'Burritos',
      qty: 15,
      date: '11/03/2019'
    },
    {
      id: 4,
      foodType: 'Lemonade',
      qty: 42,
      date: '11/15/2019'
    }
  ]);

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
          <h4>Schedule Pickup</h4>
          <Box>
            <Box className={classes.makeDonationBox}>
              <p>Make a Donation</p>
              <Fab color="primary" size='small' aria-label="add" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Box>
            <h4>Scheduled Pickups</h4>
            <Box className={classes.makeDonationBox}>
              {pickups.map( pickup => (
                <Card key={pickup.id}>
                  <CardContent>
                    <h2>{pickup.foodType}</h2>
                    <p>{pickup.qty}</p>
                    <p>{pickup.date}</p>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>

    </Container>
  );
}