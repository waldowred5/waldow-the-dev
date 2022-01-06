import React from 'react';
import StyledSvgComponent, { StyledImage, StyledLink } from './styles';
import PropTypes from 'prop-types';

export const SvgComponent = ({ link, size, src }) => {
  return (
    <StyledSvgComponent>
      {
        link ?
          <StyledLink href={link} target='_blank'>
            <StyledImage src={src} size={size} />
          </StyledLink> :
          <StyledImage src={src} size={size} />
      }
    </StyledSvgComponent>
  );
};

SvgComponent.propTypes = {
  link: PropTypes.string,
  size: PropTypes.string,
  src: PropTypes.string,
};
