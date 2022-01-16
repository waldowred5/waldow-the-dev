import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { TRIG_RATIO_MAP } from 'utils/constants';

export const HeroSecondary = ({ path }) => {
  const mesh = useRef();
  const { radius, x, y, z } = path;

  const [theta, setTheta] = useState(0);

  const increments = 100;
  const dTheta = 2 * Math.PI / increments;

  useFrame(() => {
    setTheta(theta + dTheta);

    mesh.current.position.x =
      TRIG_RATIO_MAP[x.ratio](x.amount * theta) * radius;
    mesh.current.position.z =
      TRIG_RATIO_MAP[y.ratio](y.amount * theta) * radius;
    mesh.current.position.y =
      TRIG_RATIO_MAP[z.ratio](z.amount * theta) * radius;
  });

  return (
    <>
      <mesh
        ref={mesh}
      >
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshLambertMaterial color={0xEDEDED} />
      </mesh>
    </>
  );
};

HeroSecondary.propTypes = {
  path: PropTypes.object,
};
