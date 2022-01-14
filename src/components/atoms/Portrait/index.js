import React from 'react';
import StyledPortrait, { StyledImage } from './styles';
import portrait from 'assets/img/portrait.jpeg';

export const Portrait = () => {
  return (
    <StyledPortrait>
      <StyledImage src={portrait} />
    </StyledPortrait>
  );
};
