import styled from 'styled-components';
import { fontPx, media, SCREEN_SIZE } from 'utils/styles/layout';
import { getFontFamily, getFontWeight } from 'utils/styles/theme';
import { FONT_FAMILY, FONT_WEIGHT } from 'utils/constants';

const getLogoStyle = (propName) => ({ theme }) => {
  const { logo } = theme.components;
  return logo[propName];
};

const StyledLogo = styled.div`
  // Color
  filter: drop-shadow(${getLogoStyle('dropShadowMobile')});

  // Display
  display: flex;

  // Position
  position: absolute;
  top: ${fontPx(16)};
  left: ${fontPx(16)};

  ${media[SCREEN_SIZE.TABLET]} {
    // Color
    filter: drop-shadow(${getLogoStyle('dropShadowTablet')});

    // Position
    top: ${fontPx(20)};
    left: ${fontPx(68)};
  }
`;

export const OuterContainer = styled.div`
  // Color
  background-color: ${getLogoStyle('outerContainerColor')};

  // Display
  display: flex;
  justify-content: center;
  align-items: center;

  // Shape
  transform: rotate(25deg);
  border-radius: calc(${getLogoStyle('outerContainerRadiusMobile')} * 0.3px);

  // Sizing
  height: ${getLogoStyle('outerContainerRadiusMobile')}px;
  width: ${getLogoStyle('outerContainerRadiusMobile')}px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Shape
    border-radius: calc(${getLogoStyle('outerContainerRadiusTablet')} * 0.3px);

    // Sizing
    height: ${getLogoStyle('outerContainerRadiusTablet')}px;
    width: ${getLogoStyle('outerContainerRadiusTablet')}px;
  }
`;

export const InnerContainer = styled.div`
  // Colour
  background-color: ${getLogoStyle('innerContainerColor')};

  // Shape
  border-radius: calc(${getLogoStyle('innerContainerRadiusMobile')} * 0.3px);

  // Sizing
  height: ${getLogoStyle('innerContainerRadiusMobile')}px;
  width: ${getLogoStyle('innerContainerRadiusMobile')}px;
  margin: ${getLogoStyle('innerContainerMargin')}px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Shape
    border-radius: calc(${getLogoStyle('innerContainerRadiusTablet')} * 0.3px);

    // Sizing
    height: ${getLogoStyle('innerContainerRadiusTablet')}px;
    width: ${getLogoStyle('innerContainerRadiusTablet')}px;
  }
`;

export const TextWrapper = styled.div`
  // Colour
  color: ${getLogoStyle('textColor')};

  // Display
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  // Font
  text-shadow: ${getLogoStyle('textShadow')};

  // Position
  position: absolute;
  right: calc(${getLogoStyle('textPositionMobileRight')} * 0.33px);
  top: calc(${getLogoStyle('textPositionMobileTop')} * 0.16px);

  // Shape
  transform: rotate(-25deg);

  ${media[SCREEN_SIZE.TABLET]} {
    // Position
    position: absolute;
    right: calc(${getLogoStyle('textPositionTabletRight')} * 0.16px);
    top: calc(${getLogoStyle('textPositionTabletTop')} * 0.27px);
  }
`;

export const MobilePrimaryHeading = styled.h1`
  // Display
  display: block;

  // Font
  font-size: ${fontPx(48)};
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};

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
  font-size: ${fontPx(48)};
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};

  // Sizing
  margin: ${getLogoStyle('primaryHeadingMarginTablet')};

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    display: block;
  }
`;

export const SecondaryHeading = styled.h3`
  // Display
  display: none;

  // Sizing
  margin: 0;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    display: block;

    // Font
    font-size: ${fontPx(24)};
    line-height: ${fontPx(22)};
    font-family: '${getFontFamily(FONT_FAMILY.SECONDARY)}';
    font-weight: ${getFontWeight(FONT_WEIGHT.SEMI_BOLD)};
  }
`;

export default StyledLogo;
