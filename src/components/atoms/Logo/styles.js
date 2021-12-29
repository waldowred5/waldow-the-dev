import styled from 'styled-components';
import { media, SCREEN_SIZE } from 'utils/styles/layout';

const StyledLogo = styled.div`
  // Display
  display: flex;

  // Sizing
  margin-left: 4px;
  
  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    margin-left: 80px;
    margin-top: 40px;
  }
`;

export const OuterContainer = styled.div`
  // Color
  background-color: #C56CEF; // update with ThemeProvider

  // Display
  display: flex;
  justify-content: center;
  align-items: center;

  // Shape
  transform: rotate(25deg);
  border-radius: calc(100px * 0.3);

  // Sizing
  height: 100px;
  width: 100px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Shape
    border-radius: calc(125px * 0.3);

    // Sizing
    height: 125px;
    width: 125px;
  }
`;

export const InnerContainer = styled.div`
  // Colour
  background-color: #07B8ED; // update with ThemeProvider

  // Shape
  border-radius: calc(84px * 0.3);

  // Sizing
  height: 84px;
  width: 84px;
  margin: 5px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Shape
    border-radius: calc(105px * 0.3);

    // Sizing
    height: 105px;
    width: 105px;
  }
`;

export const TextWrapper = styled.div`
  // Colour
  color: #38E000;

  // Display
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  // Font
  text-shadow: 0 0 6px #071D3A; // update with ThemeProvider

  // Position
  position: absolute;
  right: calc(125px * 0.25);
  top: calc(125px * 0.13);

  // Shape
  transform: rotate(-25deg);

  ${media[SCREEN_SIZE.TABLET]} {
    // Position
    position: absolute;
    right: calc(125px * 0.16);
    top: calc(125px * 0.27);
  }
`;

export const MobilePrimaryHeading = styled.h1`
  // Display
  display: block;

  // Font
  font-size: 74px;
  font-family: 'Bangers', serif;
  font-weight: 400;

  // Sizing
  margin: 0;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    display: none;
  }
`;

export const TabletPrimaryHeading = styled.h1`
  // Display
  display: none;

  // Font
  font-size: 48px;
  font-family: 'Bangers', serif;
  font-weight: 400;

  // Sizing
  margin: 0 14px 0 0;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    display: block;
  }
`;

export const SecondaryHeading = styled.h3`
  // Display
  display: none;

  // Font
  font-size: 24px;
  line-height: 22px;
  font-family: 'Montserrat', serif;
  font-weight: 700;

  // Sizing
  margin: 0;

  ${media[SCREEN_SIZE.TABLET]} {
    display: block;
  }
`;

export default StyledLogo;
