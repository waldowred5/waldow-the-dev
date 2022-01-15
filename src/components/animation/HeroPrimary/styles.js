import styled from 'styled-components';
import { media, SCREEN_SIZE } from 'utils/styles/layout';

const CanvasContainer = styled.div`
  // Display
  display: flex;
  
  // Sizing
  height: calc(100vh - 335px);
  margin-top: 128px;
  width: 100%;
  
  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    height: calc(100vh - 154px);
    margin: 64px 38vw 90px 0;
    width: auto;
  }
`;

export default CanvasContainer;
