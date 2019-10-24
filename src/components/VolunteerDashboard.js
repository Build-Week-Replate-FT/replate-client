import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CardActions from '@material-ui/core/CardActions';

import { axiosWithAuth } from '../utils';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridGap: '20px'
  },
  topSection: {
    backgroundColor: 'aliceblue',
    padding: '20px',
  },
  bottomSection: {
    backgroundColor: 'aliceblue',
    padding: '20px',
    height: '100%'
  },
  card: {
    color: '#23293B'
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  }
}));

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 10px;
`

function InfoCard({ data }) {
  const classes = useStyles();
  
  return (
    <Card key={data.userid} className={classes.card}>
      <CardContent>
        <h2>{data.name}</h2>
        <p>{data.email}</p>
        <p>{data.address}</p>
        <p>{data.city}, {data.state} {data.zip}</p>
      </CardContent>
    </Card>
  );
}

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
    <Container className={classes.wrapper}>

      <Box>
        <h1>Volunteer Dashboard</h1>
        <Paper className={classes.topSection}>
          <h2>My Pickups</h2>
          <Grid container justify="flex-start" spacing={2}>
            {pickups.map(pickup => (
              pickup.volunteer && pickup.volunteer.userid === user.userid && 
                <Grid item key={pickup.pickupid}>
                    <Card className={classes.card}>
                      <CardContent>
                        <h2>{pickup.foodtype}</h2>
                        <p>{pickup.quantity} {pickup.quantityunit}</p>
                        <p>{pickup.deliveryaddress}</p>
                        <p>{pickup.deliverycity}, {pickup.deliverystate} {pickup.zip}</p>
                        <p>Pickup Time: {new Date(pickup.postdate).toDateString()}</p>
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
            <Paper className={classes.bottomSection}>
              <h2>All Requests</h2>
              <StyledGrid container spacing={2}>
                {pickups.map(pickup => (
                  !pickup.volunteer && 
                  <Card key={pickup.pickupid} className={classes.card}>
                    <CardContent>
                      <h2>{pickup.foodtype}</h2>
                      <p>{pickup.quantity} {pickup.quantityunit}</p>
                      <p>{pickup.deliveryaddress}</p>
                      <p>{pickup.deliverycity}, {pickup.deliverystate} {pickup.zip}</p>
                      <p>Pickup Time: {new Date(pickup.postdate).toDateString()}</p>
                    </CardContent>
                  </Card>
                ))}
              </StyledGrid>
            </Paper>
          </Grid>
          
          <Grid item xs={6}>
            <Paper className={classes.bottomSection}>
              <h2>Local Businesses</h2>
              <StyledGrid>
                {businesses.map(business => (
                  <InfoCard key={business.userid} data={business}/>
                ))}
              </StyledGrid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
