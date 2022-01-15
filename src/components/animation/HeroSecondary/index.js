import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { dTheta, trigValue } from './data';

export const HeroSecondary = ({ index }, props) => {
  const mesh = useRef();
  const [theta, setTheta] = useState(0);

  useFrame(() => {
    setTheta(theta + dTheta);

    mesh.current.position.x = trigValue(index, 'x', theta);
    mesh.current.position.z = trigValue(index, 'y', theta);
    mesh.current.position.y = trigValue(index, 'z', theta);
  });

  return (
    <>
      <mesh
        {...props}
        ref={mesh}
      >
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshLambertMaterial color={0xEDEDED} />
      </mesh>
    </>
  );
};

HeroSecondary.propTypes = {
  index: PropTypes.number,
};
