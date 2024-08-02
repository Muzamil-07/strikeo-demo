import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function FootBallGold (props) {
  const { nodes, materials } = useGLTF('/models/Sports/football2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2011.geometry}
        material={materials['shoes/bat/pads.001']}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.007}
      />
    </group>
  )
}
useGLTF.preload('/models/Sports/football2.glb')
