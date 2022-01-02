import React from 'react';
import StyledSkillsContent, { StyledParagraph } from './styles';
import { bioContent } from './data';

export const SkillsContent = () => {
  return (
    <StyledSkillsContent>
      {bioContent.map((contentTag, index) => (
        <StyledParagraph key={index}>{contentTag}</StyledParagraph>
      ))}
    </StyledSkillsContent>
  );
};
