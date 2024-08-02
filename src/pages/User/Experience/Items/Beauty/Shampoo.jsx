/* eslint-disable react/no-unknown-property */
// models/Beauty/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Shampoo (props) {
  const { nodes, materials } = useGLTF('/models/Beauty/shampoo.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 2.559]} scale={[0.004, 0.004, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder005_01_-_Default_0001'].geometry}
          material={materials.Cos_atlas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder005_01_-_Default_0001_1'].geometry}
          material={materials['Cos_atlas.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Beauty/shampoo.glb')
