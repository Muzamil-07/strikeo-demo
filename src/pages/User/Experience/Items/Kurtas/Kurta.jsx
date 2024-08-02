/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Kurta (props) {
  const { nodes, materials } = useGLTF('/models/Kurtas/kurta_blue.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bluekurta.geometry}
        material={materials['Cos_atlas.001']}
        rotation={[Math.PI / 2, 0, -0.087]}
        scale={[0.008, 0.004, 0.008]}
      />
    </group>
  )
}

useGLTF.preload('/models/Kurtas/kurta_blue.glb')
