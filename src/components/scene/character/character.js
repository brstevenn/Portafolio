import React from 'react';
import { Canvas } from '@react-three/fiber';

function Character() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Character;