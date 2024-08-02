import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BlackShoes (props) {
  const { nodes, materials } = useGLTF('/models/Shoes/black.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoes3.geometry}
        material={materials['shoes/bat/pads baked']}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
      />
    </group>
  )
}

useGLTF.preload('/models/Shoes/black.glb')
