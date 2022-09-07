/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { RoundedBox, Text3D } from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import * as FONT_PATH from
  '../../../assets/fonts/bangers_regular.json';
// import * as FONT_PATH from
//     '../../../assets/fonts/helvetiker_regular.typeface.json';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry });

export const LogoPrimary = () => {
  const mesh = useRef();
  const { clock } = useThree();
  const font = new FontLoader().parse(FONT_PATH);
  useFrame(() => {
    mesh.current.rotation.y = Math.sin(clock.elapsedTime * 0.7);
  });

  // console.log(window)

  return (
    <>
      <group
        ref={mesh}
      >
        <RoundedBox
          args={[3.3, 3.3, 1.5]}
          radius={0.75}
          smoothness={5}
          position={[0, -0.85, 0]}
          rotation={[0, 0, 20]}
        >
          <meshStandardMaterial color={0xC56CEF}/>
        </RoundedBox>
        <RoundedBox
          args={[2.6, 2.6, 2.2]}
          radius={0.7}
          smoothness={4}
          position={[0, -0.8, 0]}
          rotation={[0, 0, 20]}
        >
          <meshStandardMaterial color={0x07B8ED}/>
        </RoundedBox>
        <mesh
          position={[-0.8, -1.8, 1.2]}
        >
          <textGeometry args={['W', { font, size: 1.8, height: 0.2 }]}/>
          <meshStandardMaterial color={0x38E000}/>
        </mesh>
      </group>
    </>
  );
};
