import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ControlsTrackball } from 'components/animation/ControlsTrackball';
import { HeroPrimary } from 'components/animation/HeroPrimary';
import { PointLight } from 'components/animation/LightPoint';
import { HeroSecondary } from 'components/animation/HeroSecondary';
import CanvasContainer from 'components/animation/HeroPrimary/styles';
import PropTypes from 'prop-types';

export const HeroCanvas = ({ lights, trigPaths }) => {
  return (
    <CanvasContainer>
      <Canvas>
        <ControlsTrackball/>
        {
          lights.map((light, index) => {
            return (
              <PointLight
                key={index}
                color={light.color}
                position={light.position}
              />
            );
          })
        }
        <HeroPrimary/>
        {
          trigPaths.map((path, index) => {
            return (
              <HeroSecondary
                key={index}
                path={path}
              />
            );
          })
        }
      </Canvas>
    </CanvasContainer>
  );
};

HeroCanvas.propTypes = {
  lights: PropTypes.array,
  trigPaths: PropTypes.array,
};
