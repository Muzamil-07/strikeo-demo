/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pears (props) {
  const { nodes, materials } = useGLTF('/models/Food/pears.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple_Box_Material001_0001.geometry}
        material={materials.Fruit_display_atlas}
        rotation={[-0.946, 0, 0]}
        scale={[0.069, 0.069, 0.06]}
      />
    </group>
  )
}

useGLTF.preload('/models/Food/pears.glb')
