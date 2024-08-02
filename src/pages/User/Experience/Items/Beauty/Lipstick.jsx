/* eslint-disable react/no-unknown-property */
// models/Beauty
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Lipstick (props) {
  const { nodes, materials } = useGLTF('/models/Beauty/lipstick.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -1.279, 0]} scale={1.4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.Cos_atlas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials['Cos_atlas.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Beauty/lipstick.glb')
