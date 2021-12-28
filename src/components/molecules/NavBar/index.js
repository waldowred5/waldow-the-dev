import React from 'react';
import StyledNavBar, {LogoLinkWrapper} from './styles';
import {Logo} from 'components/atoms/Logo';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <LogoLinkWrapper to={'/'}>
        <Logo />
      </LogoLinkWrapper>
    </StyledNavBar>
  );
};
