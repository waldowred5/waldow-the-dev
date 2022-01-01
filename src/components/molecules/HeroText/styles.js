import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontPx, media, SCREEN_SIZE } from 'utils/styles/layout';
import { FONT_FAMILY, FONT_WEIGHT, HEADING_VARIANT } from 'utils/constants';
import { getFontFamily, getFontWeight } from 'utils/styles/theme';

const getHeadingStyle = (colorVariant, propName) => ({ theme }) => {
  return theme.components.heading[colorVariant][propName];
};

const getHeroTextStyle = (propName) => ({ theme }) => {
  return theme.components.heroText[propName];
};

const headingProps = {
  colorVariant: PropTypes.string,
  fontFamily: PropTypes.string,
  theme: PropTypes.object,
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

export const PrimaryHeadingWrapper = styled('div', headingProps)`
  // Color
  color: ${getHeadingStyle(HEADING_VARIANT.PRIMARY, 'color')};
  
  // Display
  display: flex;
  flex-direction: row;
`;

export const PrimaryHeading = styled('h1', headingProps)`
  // Font
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  font-size: ${getHeroTextStyle('primaryHeadingSizeMobile')}px;
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};
  line-height: ${getHeroTextStyle('primaryHeadingLineHeightMobile')}px;

  // Sizing
  margin: ${getHeroTextStyle('primaryHeadingMarginMobile')};

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: ${getHeroTextStyle('primaryHeadingSizeTablet')}px;
    line-height: ${getHeroTextStyle('primaryHeadingLineHeightTablet')}px;

    // Sizing
    margin: ${getHeroTextStyle('primaryHeadingMarginTablet')};
  }
`;

export const SecondaryHeading = styled('h2', headingProps)`
  // Color
  color: ${getHeadingStyle(HEADING_VARIANT.SECONDARY, 'color')};
  
  // Font
  font-size: ${getHeroTextStyle('secondaryHeadingSizeMobile')}px;
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};
  line-height: ${getHeroTextStyle('secondaryHeadingLineHeightMobile')}px;
  text-align: center;

  // Sizing
  margin: 0;

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: ${getHeroTextStyle('secondaryHeadingSizeTablet')}px;
    line-height: ${getHeroTextStyle('secondaryHeadingLineHeightTablet')}px;
    
    // Sizing
    margin: ${getHeroTextStyle('secondaryHeadingMargin')};
  }
`;

export const StyledDivider = styled.div`
  // Color
  background: ${getHeroTextStyle('dividerColor')};
  
  // Display
  display: flex;
  
  // Sizing
  height: ${getHeroTextStyle('dividerHeight')}px;
  margin-bottom: ${getHeroTextStyle('dividerMargin')}px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    display: none;
  }
`;

export const StyledHeroText = styled.div`
  // Display
  align-items: center;
  display: flex;
  flex-direction: column;
  
  // Sizing
  margin-bottom: 24px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    align-items: flex-end;
    
    // Position
    position: absolute;
    bottom: ${fontPx(72)};
    right: ${fontPx(48)};
  }
`;

export const SuffixHeading = styled('h1', headingProps)`
  // Font
  font-family: '${getFontFamily(FONT_FAMILY.SECONDARY)}', cursive;
  font-size: ${getHeroTextStyle('suffixHeadingSizeMobile')}px;
  font-weight: ${getFontWeight(FONT_WEIGHT.SEMI_BOLD)};
  line-height: ${getHeroTextStyle('suffixHeadingLineHeightMobile')}px;

  // Sizing
  margin: ${getHeroTextStyle('suffixHeadingMarginMobile')};

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: ${getHeroTextStyle('suffixHeadingSizeTablet')}px;
    line-height: ${getHeroTextStyle('suffixHeadingLineHeightTablet')}px;

    // Sizing
    margin: ${getHeroTextStyle('suffixHeadingMarginTablet')};
  }
`;

export default HeroContainer;
