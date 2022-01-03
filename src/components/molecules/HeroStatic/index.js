import React from 'react';
import StyledHeroStatic, {
  Centrepiece,
  CircleEast,
  CircleNorth,
  CircleWest,
} from './styles';

export const HeroStatic = () => {
  return (
    <StyledHeroStatic>
      <CircleNorth />
      <Centrepiece />
      <CircleEast />
      <CircleWest />
    </StyledHeroStatic>
  );
};
