import React from 'react';
import { HeroText } from 'components/molecules/HeroText';
import { HeroCanvas } from 'components/animation/HeroCanvas';
import { lights, trigPaths } from './data';

export const HeroController = () => {
  return (
    <>
      <HeroCanvas
        lights={lights}
        trigPaths={trigPaths}
      />
      <HeroText/>
    </>
  );
};
