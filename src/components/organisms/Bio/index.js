import React from 'react';
import { Portrait } from 'components/atoms/Portrait';
import StyledBio, { StyledHeading } from './styles';
import { BioContent } from 'components/molecules/BioContent';

export const Bio = () => {
  return (
    <StyledBio>
      <Portrait />
      <StyledHeading>Bio</StyledHeading>
      <BioContent />
    </StyledBio>
  );
};
