import React from 'react';
import StyledPortrait, { StyledImage } from './styles';
import portrait from 'assets/img/portrait.jpeg';

// TO:DO Lazy loading for img?

export const Portrait = () => {
  return (
    <StyledPortrait>
      <StyledImage src={portrait} />
    </StyledPortrait>
  );
};
