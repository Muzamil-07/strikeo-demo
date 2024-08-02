/* eslint-disable react/no-unknown-property */
// models/Beauty/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Makeup (props) {
  const { nodes, materials } = useGLTF('/models/Beauty/makeup_kit.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_lambert1_0.geometry}
          material={materials['Cos_atlas.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_lambert1_0_1.geometry}
          material={materials.Cos_atlas}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Beauty/makeup_kit.glb')
