import React from 'react';
// import { CubeAnimation } from 'components/atoms/CubeAnimation';
import { HeroText } from '../components/molecules/HeroText';

export const HeroController = (props) => (
  <>
    {/* <CubeAnimation />*/}
    <div style={{ height: '100vh' }} />
    <HeroText {...props} />
  </>
);
