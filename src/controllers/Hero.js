import React from 'react';
// import { CubeAnimation } from 'components/atoms/CubeAnimation';
import { HeroText } from 'components/molecules/HeroText';
import { AnimationCanvasHero } from 'components/atoms/AnimationCanvasHero';

export const HeroController = (props) => (
  <>
    {/* <CubeAnimation />*/}
    <AnimationCanvasHero />
    <HeroText {...props} />
  </>
);
