import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import { businessActionCreators } from '../actions';
import { SchedulePickupForm } from './SchedulePickupForm';
import { axiosWithAuth } from '../utils';

const useStyles = makeStyles(theme => ({
  title: {
    margin: '50px 0',
    fontSize: '4rem',
  },
  subTitle: {
    marginBottom: '50px',
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  makeDonationBox: {
    marginTop: '25px',
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, 50%)',
    gridGap: '10px',
  },
  paper: {
    padding: '10px',
    width: '100%',
    backgroundColor: 'aliceblue',
    minHeight: '350px',
  },
}));

export function BusinessDashboard() {
  const classes = useStyles();

  const { user } = useSelector(state => state.authentication);
  const { pickups } = useSelector(state => state.business);
  const dispatch = useDispatch();
  const [scheduling, setScheduling] = useState(false);

  const schedulePickup = () => {
    console.log('setting scheduling to: ', !scheduling);
    setScheduling(!scheduling);
  };

  const createPickup = pickup => {
    console.log(pickup);
    dispatch(businessActionCreators.createPickupAction(pickup));
    setScheduling(false);
  };

  return (
    <>
      <Container className={classes.wrapper}>
        {scheduling && (
          <SchedulePickupForm
            scheduling={scheduling}
            setScheduling={setScheduling}
            user={user}
            createPickup={createPickup}
          />
        )}
        <Box>
          <h1 className={classes.title}>Welcome {user.name}</h1>
          <Paper className={classes.paper}>
            <h2 className={classes.subTitle}>Office Location</h2>
            <p>{user.address}</p>
            <p>
              {user.city}, {user.state} {user.zip}
            </p>
            <Box className={classes.makeDonationBox}>
              <h3>Request a Pickup</h3>
              <Fab
                disabled={scheduling}
                onClick={schedulePickup}
                color='primary'
                size='small'
                aria-label='add'
                className={classes.fab}>
                <AddIcon />
              </Fab>
            </Box>
          </Paper>
        </Box>

        <Box>
          <Paper className={classes.paper}>
            <Box>
              <h2 className={classes.subTitle}>Scheduled Pickups</h2>
              <Grid container spacing={2}>
                {pickups.pickupsList.map(pickup => (
                  <Grid item key={pickup.pickupid}>
                    <Card>
                      <CardContent>
                        <h2>{pickup.foodtype}</h2>
                        <p>
                          {pickup.quantity} {pickup.quantityunit}
                        </p>
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
    </>
  );
}
