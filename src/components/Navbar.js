import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
`;

export const Navbar = props => {
  const { user } = useSelector(state => state.authentication);
  const NavLink = user.userType ? <Link to='/profile'>Profile</Link> : <Link to='/login'>Login</Link>;
  return (
    <StyledNavWrapper>
      <h1>
        <Link to='/'>Replate</Link>
      </h1>
      <nav>{NavLink}</nav>
    </StyledNavWrapper>
  );
};
