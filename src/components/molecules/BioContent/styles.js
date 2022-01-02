import styled from 'styled-components';
import { HEADING_VARIANT } from 'utils/constants';
import { fontPx } from 'utils/styles/layout';

const getHeadingStyle = (colorVariant, propName) => ({ theme }) => {
  return theme.components.heading[colorVariant][propName];
};

const StyledBioContent = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  
  // Sizing
  max-width: 300px;
  row-gap: 24px;
`;

export const StyledParagraph = styled.p`
  // Color
  color: ${getHeadingStyle(HEADING_VARIANT.PRIMARY, 'color')};  

  // Font
  font-size: ${fontPx(16)};
  text-align: center;
  
  // Sizing
  margin: 0;
`;

export default StyledBioContent;
