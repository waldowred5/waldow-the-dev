import styled from 'styled-components';

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
