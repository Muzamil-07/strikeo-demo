/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Melons (props) {
  const { nodes, materials } = useGLTF('/models/Food/melons.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple_Box_Material001_0003.geometry}
        material={materials.Fruit_display_atlas}
        rotation={[-0.947, 0, Math.PI / 2]}
        scale={[0.069, 0.127, 0.057]}
      />
    </group>
  )
}

useGLTF.preload('/models/Food/melons.glb')
