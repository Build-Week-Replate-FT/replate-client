import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
`;

export const Navbar = props => {
  return (
    <StyledNavWrapper>
      <h1>
        <Link to="/">Replate</Link>
      </h1>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
    </StyledNavWrapper>
  );
};
