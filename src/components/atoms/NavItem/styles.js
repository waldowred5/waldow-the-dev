import styled from 'styled-components';
// import {Link as LinkS} from 'react-scroll';
import {media, SCREEN_SIZE} from 'utils/styles/layout';

const StyledNavItem = styled.div`
  // Display
  display: flex;
  justify-content: center;
  align-items: center;
  
  // Sizing
  box-sizing: border-box;
  height: 90px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Color
    background: linear-gradient(#FFFFFF00, #07B8ED59); 
    // these values have transparency flags included ^
    
    // Sizing
    width: 140px;
    border-bottom: 4px solid #07B8ED;
  }
`;

export const NavLabel = styled.p`  
  // Font
  font-size: 36px;
  font-family: 'Bangers', serif;
  color: #DEE2E3;
  
  // Sizing
  margin: 0;
`;

export default StyledNavItem;
