import styled from 'styled-components';
import { media, SCREEN_SIZE } from 'utils/styles/layout';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

const StyledNavBar = styled.nav`
  // Color
  background: lightseagreen;
  
  // Display
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  // Position
  position: sticky;
  top: 0;
  
  // Sizing
  box-sizing: border-box;
  height: 90px;
  margin-top: -90px;
  
  ${media[SCREEN_SIZE.TABLET]} {
    // Animation
    //transition: 0.8s ease all;
    
    // Color
    background: green;
  };
}
`;

export const LogoLinkWrapper = styled(LinkR)`
  display: flex;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default StyledNavBar;
