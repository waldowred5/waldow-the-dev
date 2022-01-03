import React from 'react';
import StyledBioContent, { StyledParagraph } from './styles';
import { bioContent } from './data';

export const BioContent = () => {
  return (
    <StyledBioContent>
      {bioContent.map((contentTag, index) => (
        <StyledParagraph key={index}>{contentTag}</StyledParagraph>
      ))}
    </StyledBioContent>
  );
};
