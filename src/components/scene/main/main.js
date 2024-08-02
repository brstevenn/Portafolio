import React from 'react';
import { Canvas } from '@react-three/fiber';
import Character from '../character/character';

function Main() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Character />
    </Canvas>
  );
};

export default Main;