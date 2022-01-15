import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ControlsTrackball } from 'components/animation/ControlsTrackball';
import { HeroPrimary } from 'components/animation/HeroPrimary';
import { PointLight } from 'components/animation/LightPoint';
import { HeroSecondary } from 'components/animation/HeroSecondary';
import CanvasContainer from 'components/animation/HeroPrimary/styles';

export const HeroCanvas = () => {
  const lightColour = [
    [0x07B8ED, 2.5, 11],
    [0x07B8ED, 2.5, 11],
    [0x38E000, 2.5, 11],
    [0x38E000, 2.5, 11],
    [0xC56CEF, 2.5, 11],
    [0xC56CEF, 2.5, 11],
  ];

  const lightPosition = [
    [1, 0, 8],
    [-2, 1, -10],
    [0, 10, 1],
    [0, -10, -1],
    [10, 3, 0],
    [-10, -1, 0],
  ];

  return (
    <CanvasContainer>
      <Canvas>
        <ControlsTrackball />
        <PointLight color={lightColour[0]} position={lightPosition[0]} />
        <PointLight color={lightColour[1]} position={lightPosition[1]} />
        <PointLight color={lightColour[2]} position={lightPosition[2]} />
        <PointLight color={lightColour[3]} position={lightPosition[3]} />
        <PointLight color={lightColour[4]} position={lightPosition[4]} />
        <PointLight color={lightColour[5]} position={lightPosition[5]} />
        <HeroPrimary />
        <HeroSecondary index={0} />
        <HeroSecondary index={1} />
        <HeroSecondary index={2} />
        <HeroSecondary index={3} />
      </Canvas>
    </CanvasContainer>
  );
};
