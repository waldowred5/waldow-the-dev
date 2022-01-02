import React from 'react';
import { Portrait } from 'components/atoms/Portrait';
import StyledSkills, { StyledHeading } from './styles';
import { SkillsContent } from 'components/molecules/SkillsContent';

export const Skills = () => {
  return (
    <StyledSkills>
      <StyledHeading>Skills</StyledHeading>
      <Portrait />
      <SkillsContent />
    </StyledSkills>
  );
};
