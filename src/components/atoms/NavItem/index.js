import React from 'react';
import PropTypes from 'prop-types';
import StyledNavItem, { NavLabel, NavLink } from './styles';

export const NavItem = ({ label, id }) => {
  return (
    <StyledNavItem>
      <NavLink
        to={id}
        activeClass='active'
        offset={-90}
        duration={500}
        spy={true}
        smooth={true}
      >
        <NavLabel>{label}</NavLabel>
      </NavLink>
    </StyledNavItem>
  );
};

NavItem.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};
