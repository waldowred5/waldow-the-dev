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

  // Sizing
  box-sizing: border-box;
  height: 90px;
  margin-top: -90px;
  width: 100%;
`;

const StyledNavBar = styled.nav`
  // Color
  background: linear-gradient(#07B8ED73, #FFFFFF00);
  
  // Display
  display: flex;
  justify-content: space-between;
  align-items: center;
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
