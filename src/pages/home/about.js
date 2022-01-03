import React from 'react';
import { AboutController } from 'controllers/About';

const About = (props) => (
  <div id='about'>
    <AboutController {...props} />
  </div>
);

export default About;
