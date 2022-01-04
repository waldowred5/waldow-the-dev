import styled from 'styled-components';
import { fontPx, media, SCREEN_SIZE } from 'utils/styles/layout';
import { getFontFamily, getFontWeight } from 'utils/styles/theme';
import { FONT_FAMILY, FONT_WEIGHT } from 'utils/constants';

const SiteConstructionContent = styled.div`
  // Display
  align-items: center;
  display: flex;
  justify-content: center;
  
  // Sizing
  height: calc(100vh - 64px);
  
  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    height: calc(100vh - 90px);
  }
`;

export const StyledHeading = styled.h3`
  // Color
  color: #DEE2E3;
  
  // Font
  font-size: ${fontPx(48)};
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};

  // Sizing
  margin: 0;
`;

export default SiteConstructionContent;
