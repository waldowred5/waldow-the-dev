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
    // mesh.current.rotation.y = Math.sin(clock.elapsedTime * 0.7);
  });

  // console.log(window)

  return (
    <>
      <group
        ref={mesh}
      >
        <RoundedBox
          args={[3.4, 3.4, 2]}
          radius={1}
          smoothness={5}
          position={[0, -0.9, 0]}
          rotation={[0, 0, 20]}
        >
          <meshStandardMaterial color={0xC56CEF}/>
        </RoundedBox>
        <RoundedBox
          args={[2.75, 2.75, 2.2]}
          radius={0.7}
          smoothness={4}
          position={[0, -0.85, 0]}
          rotation={[0, 0, 20]}
        >
          <meshStandardMaterial color={0x07B8ED}/>
        </RoundedBox>
        <mesh
          position={[-0.6, -1.3, 1.2]}
        >
          <textGeometry
            args={['W', { font, size: 1.25, height: 0.2 }]}
            cast-shadow={true}
          />
          <meshStandardMaterial color={'black'}/>
          {/* <meshStandardMaterial color={0x38E000}/> */}
        </mesh>
      </group>
    </>
  );
};
