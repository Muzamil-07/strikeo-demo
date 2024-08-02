/* eslint-disable react/no-unknown-property */
// /models/Food

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Almonds (props) {
  const { nodes, materials } = useGLTF('/models/Food/almond_sncks.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Material_0.geometry}
        material={materials.Fruit_display_atlas}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.046}
      />
    </group>
  )
}

useGLTF.preload('/models/Food/almond_sncks.glb')
