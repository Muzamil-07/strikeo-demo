import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BlueBag (props) {
  const { nodes, materials } = useGLTF('/models/Bags/blue.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bags.geometry}
        material={materials.PaletteMaterial001}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.25}
      />
    </group>
  )
}

useGLTF.preload('/models/Bags/blue.glb')
