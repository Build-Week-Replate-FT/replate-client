import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authActionCreators } from '../actions';

const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
`;

export const Navbar = () => {
  const { user } = useSelector(state => state.authentication);
  const dispatch = useDispatch();
  const history = useHistory();
  const NavLink = user.userType ? <Link to='/profile'>Profile</Link> : <Link to='/login'>Login</Link>;

  const handleLogout = () => {
    dispatch(authActionCreators.logoutUser(() => history.push('/')));
  };
  return (
    <StyledNavWrapper>
      <h1>
        <Link to='/'>Replate</Link>
      </h1>
      <nav>
        {NavLink}
        {user.userType && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </StyledNavWrapper>
  );
};
