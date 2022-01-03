import styled from 'styled-components';
import { media, SCREEN_SIZE } from 'utils/styles/layout';

const getDividerStyle = (propName) => ({ theme }) => {
  const { divider } = theme.components;
  return divider[propName];
};

const StyledTwoColumns = styled.div`
  // Display
  display: flex;
  justify-content: center;
`;

export const ColumnDivider = styled.div`
  // Color
  background: ${getDividerStyle('dividerColor')};
  
  // Display
  display: flex;
  
  // Sizing
  height: ${getDividerStyle('dividerSize')}px;
  margin: 48px 0;
  max-width: 300px;
  width: 100%;

  ${media[SCREEN_SIZE.TABLET]} {
   // Sizing
    height: 100%;
    margin: 0 48px;
    width: ${getDividerStyle('dividerSize')}px;
    
    &::after {
      // Position
      position: absolute;
      // Required for 100% ColumnDivider height
    }
  }
`;

export const ColumnWrapper = styled.div`
  // Display
  align-items: center;
  display: flex;
  flex-direction: column;

  // Sizing
  margin: 48px 24px 128px 24px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    align-items: flex-start;
    flex-direction: row-reverse;
    justify-content: center;
  }

  ${media[SCREEN_SIZE.DESKTOP]} {
    // Sizing
    max-width: 1024px;
  }
`;

// TO:DO Fix these divs
export const PrimaryColumn = styled.div`
  // Display
  //display: block;
`;

export const SecondaryColumn = styled.div`
  // Display
  //display: block;
`;

export default StyledTwoColumns;
