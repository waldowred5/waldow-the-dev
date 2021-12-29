import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { media, SCREEN_SIZE } from 'utils/styles/layout';

const StyledNavItem = styled.li`
  // Display
  display: flex;
  flex-direction: column;
  
  // Interaction
  cursor: pointer;

  .active {
    // Color
    background: linear-gradient(#FFFFFF00, #07B8ED59);
    // these values have transparency flags included ^

    // Sizing
    border-bottom: 4px solid #07B8ED;
  }
`;

export const NavLabel = styled.p`  
  // Font
  font-size: 28px;
  font-family: 'Bangers', cursive;
  color: #DEE2E3;
  
  // Sizing
  margin: 0;
`;

export const NavLink = styled(LinkS)`
  // Display
  display: flex;
  justify-content: center;
  align-items: center;

  // Sizing
  box-sizing: border-box;
  height: 90px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    width: 120px;

    //&:hover {
    //  // Color
    //  background: linear-gradient(#FFFFFF00, #07B8ED59);
    //  // these values have transparency flags included ^
    //  
    //  // Sizing
    //  border-bottom: 4px solid #07B8ED;
    //}
  }
`;

export default StyledNavItem;
