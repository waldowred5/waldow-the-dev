import React from 'react';
import { HeroController } from 'controllers/Hero';

const Hero = () => (
  <div id='hero' style={{ display: 'flex', flexDirection: 'column' }}>
    <HeroController />
  </div>
);

export default Hero;
