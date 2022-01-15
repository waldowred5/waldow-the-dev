import styled from 'styled-components';
import PropTypes from 'prop-types';

const svgProps = {
  size: PropTypes.string,
};

const StyledSvgComponent = styled.div`
  // Display
  align-items: center;
  display: flex;
  justify-content: center;

  // Shape
  border-radius: 100%;
`;

export const StyledImage = styled('img', svgProps)`
  // Animation
  transition: filter 0.25s ease-in-out;
  
  // Color
  filter: // https://codepen.io/sosuke/pen/Pjoqqp
    invert(71%)
    sepia(79%)
    saturate(4198%)
    hue-rotate(66deg)
    brightness(111%)
    contrast(105%)
  ;

  // Sizing
  width: ${({ size }) => size};
  
  &:hover {
    // Color
    filter: // https://codepen.io/sosuke/pen/Pjoqqp
      invert(76%) 
      sepia(75%) 
      saturate(4627%) 
      hue-rotate(154deg) brightness(97%) 
      contrast(95%)
    ;
  }
`;

export const StyledLink = styled.a`
  // Animation
  transition: all 0.25s ease-in-out;

  // Color
  background: #38E00026; 
  box-shadow: 0 0 24px 24px #38E00026;

  // Display
  display: flex;

  // Shape
  border-radius: 100%;

  &:hover {
    // Color
    background: #07B8ED26;
    box-shadow: 
      0 0 24px 24px #07B8ED26;
  }
`;

export default StyledSvgComponent;
