import React from 'react';
import StyledHeading from './styles';
import PropTypes from 'prop-types';

export const Heading = ({
  children,
  colorVariant,
  fontFamily,
  fontSize,
  type }) => (
  <StyledHeading
    as={type}
    colorVariant={colorVariant}
    fontFamily={fontFamily}
    fontSize={fontSize}
    // type={type}
  >
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  colorVariant: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  type: PropTypes.string,
};
