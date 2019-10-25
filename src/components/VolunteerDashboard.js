import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';

import { axiosWithAuth } from '../utils';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridGap: '10px',
  },
  pickupsTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  topSection: {
    backgroundColor: 'aliceblue',
    minHeight: '500px',
    marginTop: '20px',
    padding: '20px',
  },
  bottomSection: {
    backgroundColor: 'aliceblue',
    padding: '20px',
    minHeight: '500px',
  },
  card: {
    color: '#23293B',
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

function BusinessCard({ data }) {
  const classes = useStyles();

  return (
    <Card key={data.userid} className={classes.card}>
      <CardContent>
        <h2>{data.name}</h2>
        <p>{data.email}</p>
        <p>{data.address}</p>
        <p>
          {data.city}, {data.state} {data.zip}
        </p>
      </CardContent>
    </Card>
  );
}

function PickupCard({ data, interaction }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <h2>{data.foodtype}</h2>
        <p>
          {data.quantity} {data.quantityunit}
        </p>
        <p>{data.deliveryaddress}</p>
        <p>
          {data.deliverycity}, {data.deliverystate} {data.zip}
        </p>
        <p>Pickup Time: {new Date(data.postdate).toDateString()}</p>
      </CardContent>
    </Card>
  );
}

export function VolunteerDashboard() {
  const classes = useStyles();
  const { user } = useSelector(state => state.authentication);

  const [pickups, setPickups] = useState([]);
  const [filter, setFilter] = useState(false);
  const [filteredPickups, setFilteredPickups] = useState([]);

  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [querying, setQuerying] = useState(false);

  const renderPickups = filter
    ? filteredPickups.length
      ? filteredPickups
      : []
    : pickups;

  const renderBusinesses = querying
    ? filteredBusinesses.length
      ? filteredBusinesses
      : []
    : businesses;

  console.log(renderBusinesses);

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
      });
  }, []);

  useEffect(() => {
    console.log(filter);
    filter ? filterCurrentRequests() : setFilteredPickups([]);
  }, [filter]);

  const filterCurrentRequests = () => {
    const filteredList = pickups.filter(
      pickup =>
        new Date(pickup.postdate).toDateString() === new Date(Date.now()).toDateString()
    );
    setFilteredPickups(filteredList);
  };

  const searchBusinesses = event => {
    const query = event.target.value;
    query.length ? setQuerying(true) : setQuerying(false);
    const filteredBusinesses = businesses.filter(
      business =>
        business.name.toLowerCase().includes(query.toLowerCase()) ||
        business.email.toLowerCase().includes(query.toLowerCase()) ||
        business.address.toLowerCase().includes(query.toLowerCase()) ||
        business.city.toLowerCase().includes(query.toLowerCase()) ||
        business.state.toLowerCase().includes(query.toLowerCase()) ||
        business.zip.toLowerCase().includes(query.toLowerCase())
    );

    console.log(filteredBusinesses);
    setFilteredBusinesses(filteredBusinesses);
  };

  return (
    <Container className={classes.wrapper}>
      <Box>
        <h1>Welcome {user.name.split(' ')[0]}!</h1>
        <Paper className={classes.topSection}>
          <h2>My Pickups</h2>
          <Grid container justify="flex-start" spacing={2}>
            {pickups.map(
              pickup =>
                pickup.volunteer &&
                pickup.volunteer.userid === user.userid && (
                  <Grid item key={pickup.pickupid}>
                    <PickupCard data={pickup} />
                  </Grid>
                )
            )}
          </Grid>
        </Paper>
      </Box>

      <Box>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Paper className={classes.bottomSection}>
              <div className={classes.pickupsTitleWrapper}>
                <h2>Requested Pickups</h2>
                <div>
                  <span>Filter Today's Requests</span>
                  <Checkbox
                    color="primary"
                    onChange={() => setFilter(!filter)}
                    inputProps={{
                      'aria-label': 'uncontrolled-checkbox',
                    }}
                  />
                </div>
              </div>
              <StyledGrid container spacing={2}>
                {renderPickups.map(
                  pickup =>
                    !pickup.volunteer && (
                      <PickupCard key={pickup.pickupid} data={pickup} />
                    )
                )}
              </StyledGrid>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.bottomSection}>
              <div className={classes.pickupsTitleWrapper}>
                <h2>Local Businesses</h2>
                <TextField
                  label="Search"
                  onChange={searchBusinesses}
                  className={classes.textField}
                />
              </div>
              <StyledGrid>
                {renderBusinesses.map(business => (
                  <BusinessCard key={business.userid} data={business} />
                ))}
              </StyledGrid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
