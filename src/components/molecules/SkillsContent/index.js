import React from 'react';
import StyledSkillsContent, { StyledColumn } from './styles';
import { iconComponentMap } from './data';
import { IconComponent } from 'components/atoms/IconComponent';

export const SkillsContent = () => {
  return (
    <StyledSkillsContent>
      <StyledColumn>
        <IconComponent group='primary' iconComponentMap={iconComponentMap} />
      </StyledColumn>
      <StyledColumn>
        <IconComponent group='secondary' iconComponentMap={iconComponentMap} />
      </StyledColumn>
    </StyledSkillsContent>
  );
};
