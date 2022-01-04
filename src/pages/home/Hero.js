import React from 'react';
import { HeroController } from 'controllers/Hero';

// TO:DO replace inline styling

const Hero = () => (
  <div id='hero' style={{ display: 'flex', flexDirection: 'column' }}>
    <HeroController />
  </div>
);

export default Hero;
