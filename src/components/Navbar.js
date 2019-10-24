import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import { authActionCreators } from '../actions';
import { fontFamily } from '@material-ui/system';

const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
`;

const useStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: 'aliceblue'
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#23293B',
    textDecoration: 'none'
  },
  button: {
    color: '#23293B',
    fontFamily: 'inherit',
    textTransform: 'none',
    fontSize: '1rem'
  }
}));

export const Navbar = () => {
  const { user } = useSelector(state => state.authentication);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const NavLink = user.userType ? <Link className={classes.link} to='/profile'>Profile</Link> : <Link className={classes.link} to='/login'>Login</Link>;

  const handleLogout = () => {
    dispatch(authActionCreators.logoutUser(() => history.push('/')));
  };
  return (
    <AppBar className={classes.bar} position="static">
      <Toolbar>
        <h1 className={classes.title}>
          <Link className={classes.link} to='/'>Replate</Link>
        </h1>
        {NavLink}
        {user.userType && <Button className={classes.button} color="inherit" onClick={handleLogout}>Logout</Button>}
      </Toolbar>
    </AppBar>

    // <StyledNavWrapper>
    //   <h1>
    //     <Link to='/'>Replate</Link>
    //   </h1>
    //   <nav>
    //     {NavLink}
    //     {user.userType && <button onClick={handleLogout}>Logout</button>}
    //   </nav>
    // </StyledNavWrapper>
  );
};
