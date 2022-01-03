import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader, { StyledHeading } from './styles';

export const PageHeader = ({ label }) => (
  <StyledHeader>
    <StyledHeading>{label}</StyledHeading>
  </StyledHeader>
);

PageHeader.propTypes = {
  label: PropTypes.string,
};
