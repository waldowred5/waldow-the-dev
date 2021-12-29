import React from 'react';
import StyledNavBar, {
  BackgroundFilter,
  LogoLinkWrapper,
  NavMenu,
} from './styles';
import { Logo } from 'components/atoms/Logo';
import PropTypes from 'prop-types';
import { NavItem } from 'components/atoms/NavItem';

export const NavBar = ({ routes }) => (
  <BackgroundFilter>
    <StyledNavBar>
      <LogoLinkWrapper to={'/'}><Logo /></LogoLinkWrapper>
      <NavMenu>
        {routes.map((route, index) => (
          <NavItem key={index} label={route.label} id={route.id}/>
        ))}
      </NavMenu>
    </StyledNavBar>
  </BackgroundFilter>
);

NavBar.propTypes = {
  routes: PropTypes.arrayOf,
};
