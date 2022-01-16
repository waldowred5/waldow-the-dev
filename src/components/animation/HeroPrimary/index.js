import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

export const HeroPrimary = () => {
  const mesh = useRef();
  useThree(({ camera }) => {
    camera.position.set(-7.5, 0, 0);
  });
  useFrame(() => {
    mesh.current.rotation.y -= 0.01;
  });

  return (
    <>
      <mesh
        ref={mesh}
        rotation={[60, 0, 0]}
      >
        <octahedronGeometry args={[2, 0]}/>
        <meshLambertMaterial color={0xFFFFFF} />
      </mesh>
    </>
  );
};
