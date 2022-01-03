import styled from 'styled-components';
import { media, SCREEN_SIZE } from 'utils/styles/layout';

const StyledHeroStatic = styled.div`
  // Display
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  // Sizing
  margin-top: calc(72px + 64px);
  width: 100%;
  
  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    margin: 0;
    
    // Position
    position: relative;
    left: -164px;
  }
`;

export const Centrepiece = styled.div`
  // Display
  display: flex;
  
  // Color
  background: #38E000;
  
  // Shape
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  
  // Sizing
  height: 86px;
  width: 100px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    height: 172px;
    width: 200px;
  }
`;

export const CircleNorth = styled.div`
  // Color
  background: #C56CEF;
  
  // Position
  position: relative;
  top: -20px;
  
  // Shape
  border-radius: 100%;

  // Sizing
  height: 20px;
  width: 20px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Position
    position: relative;
    top: -40px;
    
    // Sizing
    height: 40px;
    width: 40px;
  }
`;

export const CircleEast = styled.div`
  // Color
  background: #C56CEF;

  // Position
  position: relative;
  top: -38px;
  right: -56px;

  // Shape
  border-radius: 100%;

  // Sizing
  height: 20px;
  width: 20px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Position
    position: relative;
    top: -76px;
    right: -112px;
    
    // Sizing
    height: 40px;
    width: 40px;
  }
`;

export const CircleWest = styled.div`
  // Color
  background: #C56CEF;

  // Position
  position: relative;
  top: -58px;
  left: -56px;

  // Shape
  border-radius: 100%;

  // Sizing
  height: 20px;
  width: 20px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Position
    position: relative;
    top: -116px;
    left: -112px;
    
    // Sizing
    height: 40px;
    width: 40px;
  }
`;

export default StyledHeroStatic;
