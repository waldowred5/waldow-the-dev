import React from 'react';
import { HeroText } from 'components/molecules/HeroText';
import { HeroCanvas } from 'components/animation/HeroCanvas';
// import { AnimationCanvasHero } from 'components/atoms/AnimationCanvasHero';

export const HeroController = () => (
  <>
    <HeroCanvas />
    {/* <AnimationCanvasHero />*/}
    <HeroText />
  </>
);
