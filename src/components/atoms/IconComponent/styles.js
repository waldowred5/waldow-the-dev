import styled from 'styled-components';
import { HEADING_VARIANT } from 'utils/constants';
import { fontPx } from 'utils/styles/layout';

const getHeadingStyle = (colorVariant, propName) => ({ theme }) => {
  return theme.components.heading[colorVariant][propName];
};

const StyledIconComponent = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  align-items: center;
  
  // Sizing
  row-gap: 16px;
`;

export const IconLabel = styled.h5`
  // Display
  align-items: center;
  display: flex;

  // Color
  color: ${getHeadingStyle(HEADING_VARIANT.TERTIARY, 'color')};
  
  // Font
  font-size: ${fontPx(24)};
  text-align: center;
  
  // Sizing
  margin: 0;
`;

export const StyledIconContainer = styled.div`
  // Animation
  transition: all 0.25s ease-in-out;
  
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

export const StyledLink = styled.a`
  // Display
  display: flex;
  
  // Shape
  border-radius: 100%;
  
  ${StyledIconContainer}:hover {
    // Color
    background: #38E00026; // TO:DO set as TertiaryBright in thema
    box-shadow: 0 0 18px 18px #38E00026; // TO:DO set as TertiaryBright in thema
  }
`;

export default StyledIconComponent;
