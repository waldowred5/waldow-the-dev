import React from 'react';
import StyledNavBar, {
  LogoLinkWrapper,
  NavMenu,
  NavLink,
  NavItem,
} from './styles';
// import { animateScroll as scroll } from 'react-scroll';
import { Logo } from 'components/atoms/Logo';
// import routes from 'routes';
// import { Routes } from 'react-router-dom';
// import { NavItem } from '../../atoms/NavItem';

// NAVLINK (scroll)
// activeClass='active'
// offset={-90}
// duration={500}
// spy={true}
// smooth={true}>Home</NavLink>

export const NavBar = () => (
  <StyledNavBar>
    <LogoLinkWrapper to={'/'}>
      <Logo />
    </LogoLinkWrapper>
    {/* {routesList}*/}
    {/* <NavItem link={'about'} label={'About'}/>*/}
    <NavMenu>
      <NavItem>
        <NavLink to={'/'}
          activeClass='active'
          offset={-90}
          duration={500}
          spy={true}
          smooth={true}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={'about'}
          activeClass='active'
          offset={-90}
          duration={500}
          spy={true}
          smooth={true}>About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={'projects'}
          activeClass='active'
          offset={-90}
          duration={500}
          spy={true}
          smooth={true}>Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={'blog'}
          activeClass='active'
          offset={-90}
          duration={500}
          spy={true}
          smooth={true}>Blog</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={'contact'}
          activeClass='active'
          offset={-90}
          duration={500}
          spy={true}
          smooth={true}>Contact</NavLink>
      </NavItem>
    </NavMenu>
  </StyledNavBar>
);

