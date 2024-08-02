/* eslint-disable react/no-unknown-property */
// /models/Food
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Oranges (props) {
  const { nodes, materials } = useGLTF('/models/Food/orange.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple_Box_Material001_0002.geometry}
        material={materials.Fruit_display_atlas}
        position={[0.033, 0.069, 0.051]}
        rotation={[-0.968, 0, 0]}
        scale={[0.069, 0.069, 0.06]}
      />
    </group>
  )
}

useGLTF.preload('/models/Food/orange.glb')
