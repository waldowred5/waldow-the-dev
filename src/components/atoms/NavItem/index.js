import React from 'react';
import PropTypes from 'prop-types';
import StyledNavItem from './styles';

export const NavItem = ({ label, link }) => {
  return (
    <StyledNavItem to={link}>{label}</StyledNavItem>
  );
};

NavItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
};
