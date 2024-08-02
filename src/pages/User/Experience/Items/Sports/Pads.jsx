import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pads (props) {
  const { nodes, materials } = useGLTF('/models/Sports/pads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pads.geometry}
        material={materials['shoes/bat/pads baked']}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
      />
    </group>
  )
}
useGLTF.preload('/models/Sports/pads.glb')
