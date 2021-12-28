import styled from 'styled-components';
import {media, SCREEN_SIZE} from 'utils/styles/layout';
import {Link as LinkR} from 'react-router-dom';

const StyledNavBar = styled.div`
  // Color
  background: lightseagreen;
  
  // Display
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  // Sizing
  box-sizing: border-box;
  height: 90px;
  
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

export default StyledNavBar;
