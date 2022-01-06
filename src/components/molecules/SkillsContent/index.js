import React from 'react';
import StyledSkillsContent, { StyledColumn } from './styles';
import { skillsContent } from './data';
import { IconComponent } from 'components/atoms/IconComponent';

export const SkillsContent = () => {
  return (
    <StyledSkillsContent>
      <StyledColumn>
        <IconComponent
          content={skillsContent}
          group='primary'
        />
      </StyledColumn>
      <StyledColumn>
        <IconComponent
          content={skillsContent}
          group='secondary'
        />
      </StyledColumn>
    </StyledSkillsContent>
  );
};
