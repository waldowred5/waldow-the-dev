import styled from 'styled-components';
import { media, SCREEN_SIZE } from 'utils/styles/layout';

const StyledCanvas = styled.div`
  // Display
  display: flex;
  
  height: calc(100vh - 167px);
  // TO:DO Do this properly
  
  ${media[SCREEN_SIZE.TABLET]} {
    height: 100vh;
  }
`;

export default StyledCanvas;
