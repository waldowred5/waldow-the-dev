import styled from 'styled-components';
import { HEADING_VARIANT } from 'utils/constants';
import { fontPx } from 'utils/styles/layout';

const getHeadingStyle = (colorVariant, propName) => ({ theme }) => {
  return theme.components.heading[colorVariant][propName];
};

const StyledSkillsContent = styled.div`
  // Display
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  // Sizing
  max-width: 300px;
  min-width: 272px;
  row-gap: 24px;
  width: 100%;
`;

export const IconContainer = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  align-items: center;
  
  // Sizing
  row-gap: 16px;
`;

export const IconLabel = styled.h5`
  // Color
  color: ${getHeadingStyle(HEADING_VARIANT.TERTIARY, 'color')};
  
  // Font
  font-size: ${fontPx(24)};
  text-align: center;
  
  // Sizing
  margin: 0;
`;

export const IconWrapper = styled.div`
  // Color
  background: #C56CEF26; // TO:DO set as TertiaryBright in thema 
  box-shadow: 0 0 18px 18px #C56CEF26; // TO:DO set as TertiaryBright in thema

  // Display
  align-items: center;
  display: flex;
  justify-content: center;

  // Shape
  border-radius: 100%;
  
  // Sizing
  height: 82px;
  width: 82px;
`;

export const StyledColumn = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  align-items: center;
  
  // Sizing
  row-gap: 48px;
  width: 140px;
`;

export default StyledSkillsContent;
