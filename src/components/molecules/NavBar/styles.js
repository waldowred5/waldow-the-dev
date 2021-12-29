import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundFilter = styled.div`
  // Color
  background: #007A62;

  // Display
  display: flex;

  // Position
  position: sticky;
  top: 0;
  z-index: 10;

  // Sizing
  box-sizing: border-box;
  height: 90px;
  margin-top: -90px;
`;

const StyledNavBar = styled.nav`
  // Color
  background: linear-gradient(#07B8ED73, #FFFFFF00);

  // Display
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const LogoLinkWrapper = styled(Link)`
  // Display
  display: flex;
`;

export const NavMenu = styled.ul`
  // Display
  display: flex;
  align-items: center;
  
  // Sizing
  padding: 0;
  margin: 0;
`;

export default StyledNavBar;
