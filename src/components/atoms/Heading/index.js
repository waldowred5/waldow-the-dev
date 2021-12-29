import React from 'react';
import StyledHeading from './styles';
import PropTypes from 'prop-types';

// const customTag = `h${number}`;

export const Heading = ({ children, colorVariant, fontSize, type }) => (
  <StyledHeading
    colorVariant={colorVariant}
    fontSize={fontSize}
    type={type}
  >
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  colorVariant: PropTypes.string,
  fontSize: PropTypes.array,
  type: PropTypes.string,
};
