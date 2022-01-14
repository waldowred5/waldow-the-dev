import React from 'react';
import styled from 'styled-components';
import { HEADING_VARIANT } from 'utils/constants';
import { fontPx } from 'utils/styles/layout';
import PropTypes from 'prop-types';
import * as Ai from 'react-icons/ai';
import * as Fa from 'react-icons/fa';
import * as Go from 'react-icons/go';
import * as Si from 'react-icons/si';
import { CSharp } from 'components/atoms/Svgs/CSharp';
import { Github } from 'components/atoms/Svgs/Github';

const getHeadingStyle = (colorVariant, propName) => ({ theme }) => {
  return theme.components.heading[colorVariant][propName];
};

const iconFamilyMap = {
  Ai: Ai,
  Fa: Fa,
  Go: Go,
  Si: Si,
};

const svgMap = {
  CSharp: CSharp,
  Github: Github,
};

const iconProps = {
  colorWrapper: PropTypes.string,
  hasLink: PropTypes.bool,
  sizeWrapper: PropTypes.bool,
  shadowSize: PropTypes.number,
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

export const StyledIconContainer = styled('div', iconProps)`
  // Animation
  transition: all 0.25s ease-in-out;

  // Color
  background:
    ${({ colorWrapper }) => colorWrapper ? `${colorWrapper}26` : '#C56CEF26'};
  box-shadow:
    ${({ colorWrapper, shadowSize }) => colorWrapper ?
      `0 0 ${shadowSize}px ${shadowSize}px ${colorWrapper}26` :
      `0 0 ${shadowSize}px ${shadowSize}px #C56CEF26`
};

  // Display
  align-items: center;
  display: flex;
  justify-content: center;

  // Shape
  border-radius: 100%;
  
  // Sizing
  height: ${({ sizeWrapper }) => `${sizeWrapper}px`};
  width: ${({ sizeWrapper }) => `${sizeWrapper}px`};
`;

export const StyledLink = styled('a', iconProps)`
  // Display
  display: flex;
  
  // Shape
  border-radius: 100%;
  
  ${StyledIconContainer}:hover {
    // Color
    background: #07B8ED26;
    box-shadow:
      ${({ shadowSize }) => `0 0 ${shadowSize}px ${shadowSize}px #07B8ED26`}
    ;
  }
`;

const StyledCustomIcon = styled(({ iconFamily, icon, ...props }) =>
  React.createElement(iconFamilyMap[iconFamily][icon], props),
)`
  // Animation
  transition: all 0.25s ease-in-out;
  
  // Color
  color: ${({ color }) => color};
  
  // Sizing
  width: ${({ size }) => `${size}px`};
`;

const StyledCustomIconLink = styled(({ iconFamily, icon, ...props }) =>
  React.createElement(iconFamilyMap[iconFamily][icon], props),
)`
  // Animation
  transition: all 0.25s ease-in-out;
  
  // Color
  color: ${({ color }) => color};
  
  // Sizing
  width: ${({ size }) => `${size}px`};

  ${StyledIconContainer}:hover & {
    fill: #07B8ED;
  }
`;

export const CustomIcon = ({ color, hasLink, icon, iconFamily, size }) =>
  hasLink ?
  <StyledCustomIconLink {...{ color, icon, iconFamily, size }} /> :
  <StyledCustomIcon {...{ color, icon, iconFamily, size }} />;

CustomIcon.propTypes = {
  color: PropTypes.string,
  hasLink: PropTypes.bool,
  icon: PropTypes.string,
  iconFamily: PropTypes.string,
  size: PropTypes.number,
};

const StyledCustomSvg = styled(({ svgRef, ...props }) =>
  React.createElement(svgMap[svgRef], props),
)``;


const StyledCustomSvgLink = styled(Github)`
  // // Animation
  // transition: all 0.25s ease-in-out;
  //
  // // Color
  // //color: blue;
  // color: ${({ color }) => color};
  //
  // &:hover {
  //   filter: grayscale(100%);
  //   //fill: #07B8ED;
  // }
`;

export const CustomSvg = ({ color, hasLink, svgRef }) =>
  hasLink ?
    <StyledCustomSvgLink {...{ color, svgRef }} /> :
    <StyledCustomSvg {...{ color, svgRef }} />;

CustomSvg.propTypes = {
  color: PropTypes.string,
  hasLink: PropTypes.bool,
  svgRef: PropTypes.string,
};

export default StyledIconComponent;
