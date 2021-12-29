import React from 'react';
import StyledNavBar, {
  LogoLinkWrapper,
  NavMenu,
} from './styles';
import { Logo } from 'components/atoms/Logo';
import PropTypes from 'prop-types';
import { NavItem } from 'components/atoms/NavItem';

export const NavBar = ({ routes }) => (
  <StyledNavBar>
    <LogoLinkWrapper to={'/'}><Logo /></LogoLinkWrapper>
    <NavMenu>
      {routes.map((route, index) => (
        <NavItem key={index} label={route.label} id={route.id}/>
      ))}
    </NavMenu>
  </StyledNavBar>
);

NavBar.propTypes = {
  routes: PropTypes.arrayOf,
};
