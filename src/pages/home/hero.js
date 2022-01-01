import React from 'react';
import { HeroController } from 'controllers/Hero';

const Hero = (props) => (
  <div id='hero'>
    <HeroController {...props} />
  </div>
);

export default Hero;
