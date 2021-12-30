import React from 'react';
import StyledButton from './styles';
import PropTypes from 'prop-types';

export const Button = ({ children, colorVariant, onClick }) => (
  <StyledButton colorVariant={colorVariant} onClick={onClick}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  colorVariant: PropTypes.string,
  onClick: PropTypes.func,
};
