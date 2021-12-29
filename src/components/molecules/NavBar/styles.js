import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavBar = styled.nav`
  // Color
  background: #007A62;
  
  // Display
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  // Position
  position: sticky;
  top: 0;
  
  // Sizing
  box-sizing: border-box;
  height: 90px;
  margin-top: -90px;
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
