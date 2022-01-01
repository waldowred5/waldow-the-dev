import styled from 'styled-components';
import { media, SCREEN_SIZE } from 'utils/styles/layout';

const StyledCanvas = styled.div`
  height: calc(100vh - 231px);
  // TO:DO Do this properly
  
  ${media[SCREEN_SIZE.TABLET]} {
    height: 100vh;
  }
`;

export default StyledCanvas;
