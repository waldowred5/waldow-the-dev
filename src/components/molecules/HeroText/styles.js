import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontPx } from 'utils/styles/layout';
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

export const StyledHeroText = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  // Position
  position: absolute;
  bottom: ${fontPx(72)};
  right: ${fontPx(48)};
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
  font-size: ${getHeroTextStyle('primaryHeadingSize')}px;
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};
  line-height: ${getHeroTextStyle('primaryHeadingLineHeight')}px;

  // Sizing
  margin: ${getHeroTextStyle('primaryHeadingMargin')};
`;

export const SuffixHeading = styled('h1', headingProps)`
  // Font
  font-family: '${getFontFamily(FONT_FAMILY.SECONDARY)}', cursive;
  font-size: ${getHeroTextStyle('suffixHeadingSize')}px;
  font-weight: ${getFontWeight(FONT_WEIGHT.SEMI_BOLD)};
  line-height: ${getHeroTextStyle('suffixHeadingLineHeight')}px;

  // Sizing
  margin: ${getHeroTextStyle('suffixHeadingMargin')};
`;

export const SecondaryHeading = styled('h2', headingProps)`
  // Color
  color: ${getHeadingStyle(HEADING_VARIANT.SECONDARY, 'color')};
  
  // Font
  font-size: ${getHeroTextStyle('secondaryHeadingSize')}px;
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};
  line-height: ${getHeroTextStyle('secondaryHeadingLineHeight')}px;

  // Sizing
  margin: ${getHeroTextStyle('secondaryHeadingMargin')};
`;

export default StyledHeroText;
