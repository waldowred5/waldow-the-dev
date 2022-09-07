import React from 'react';
import StyledNavBar, {
  BackgroundFilter,
  LogoLinkWrapper,
  NavMenu,
} from './styles';
import { LogoTwo } from 'components/atoms/LogoTwo';
import PropTypes, { shape } from 'prop-types';
import { NavItem } from 'components/atoms/NavItem';
import ThemeButton from 'componentsSmart/themeSelector';

export const NavBar = ({ routes, setter, theme }) => (
  <BackgroundFilter>
    <StyledNavBar>
      <LogoLinkWrapper to={'/'}><LogoTwo theme={theme}/></LogoLinkWrapper>
      <ThemeButton setter={setter}>Theme</ThemeButton>
      <NavMenu>
        {routes.map((route, index) => (
          <NavItem key={index} label={route.label} id={route.id}/>
        ))}
      </NavMenu>
    </StyledNavBar>
  </BackgroundFilter>
);

NavBar.propTypes = {
  routes: PropTypes.arrayOf(
      shape({
        id: PropTypes.string,
        label: PropTypes.string,
      }),
  ),
  setter: PropTypes.func,
  theme: PropTypes.object,
};
