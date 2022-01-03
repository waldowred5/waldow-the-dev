import styled from 'styled-components';
import { fontPx } from 'utils/styles/layout';
import { getFontFamily, getFontWeight } from 'utils/styles/theme';
import { FONT_FAMILY, FONT_WEIGHT, HEADING_VARIANT } from 'utils/constants';

const getHeadingStyle = (colorVariant, propName) => ({ theme }) => {
  return theme.components.heading[colorVariant][propName];
};

const StyledBio = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeading = styled.h1`
  // Color
  color: ${getHeadingStyle(HEADING_VARIANT.TERTIARY, 'color')};  

  // Font
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  font-size: ${fontPx(96)};
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};
  
  // Sizing
  margin: 32px 0;
`;

export default StyledBio;
