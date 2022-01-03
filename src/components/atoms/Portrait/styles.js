import styled from 'styled-components';

const StyledPortrait = styled.div`
  // Color
  background: #071D3A;
  filter: drop-shadow(0 0 6px #38E000);

  // Display
  display: flex;
  
  // Shape
  border-radius: 68px;
  
  // Sizing
  max-width: 300px;
  width: 85vw;
`;

export const StyledImage = styled.img`
  // Color
  mix-blend-mode: color-dodge;
  filter: 
    grayscale(0.7)
    brightness(1.25) 
    contrast(0.9);
  
  // Shape
  border-radius: 68px;
  
  // Sizing
  min-width: 0;
  object-fit: cover;
`;

export default StyledPortrait;
