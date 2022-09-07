import React from 'react';
import {
  BackgroundFilter,
  BackgroundFilterMobile,
  LogoLinkWrapper,
  NavMenu,
  NavMenuMobile,
  StyledNavBar,
} from './styles';
import { LogoTwo } from 'components/atoms/LogoTwo';
import { LogoThree } from 'components/atoms/LogoThree';
import PropTypes, { shape } from 'prop-types';
import { NavItem } from 'components/atoms/NavItem';
import ThemeButton from 'componentsSmart/themeSelector';
import { NavItemMobile } from 'components/atoms/NavItemMobile';

const RoutesList = ({ isMobile, routes }) => {
  return (
    <>
      {routes.map((route, index) => (
        isMobile ?
          <NavItemMobile key={index} label={route.label} id={route.id}/> :
          <NavItem key={index} label={route.label} id={route.id}/>
      ))}
    </>
  );
};

RoutesList.propTypes = {
  isMobile: PropTypes.bool,
  routes: PropTypes.arrayOf(
      shape({
        id: PropTypes.string,
        label: PropTypes.string,
      })),
};

export const NavBarMobile = ({ routes, setter, theme }) => (
  <>
    <BackgroundFilter>
      <StyledNavBar>
        <LogoLinkWrapper to={'/'}>
          <LogoTwo theme={theme}/>
        </LogoLinkWrapper>
        <LogoLinkWrapper to={'/'}>
          <LogoThree theme={theme}/>
        </LogoLinkWrapper>
        <ThemeButton setter={setter}/>
        <NavMenu>
          <RoutesList isMobile={false} routes={routes}/>
        </NavMenu>
      </StyledNavBar>
    </BackgroundFilter>
    <BackgroundFilterMobile>
      <NavMenuMobile>
        <RoutesList isMobile={true} routes={routes}/>
      </NavMenuMobile>
    </BackgroundFilterMobile>
  </>
);

NavBarMobile.propTypes = {
  routes: PropTypes.arrayOf(
      shape({
        id: PropTypes.string,
        label: PropTypes.string,
      }),
  ),
  setter: PropTypes.func,
  theme: PropTypes.object,
};
