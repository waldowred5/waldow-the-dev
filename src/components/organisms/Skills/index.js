import React from 'react';
import StyledSkills, { StyledHeading } from './styles';
import { SkillsContent } from 'components/molecules/SkillsContent';

export const Skills = () => {
  return (
    <StyledSkills>
      <StyledHeading>Skills</StyledHeading>
      <SkillsContent />
    </StyledSkills>
  );
};
