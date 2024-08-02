/* eslint-disable react/no-unknown-property */
// models/Beauty/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RoseWater (props) {
  const { nodes, materials } = useGLTF('/models/Beauty/spray.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -0.029, -Math.PI / 2]} scale={0.004}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder008_01_-_Default_0001'].geometry}
          material={materials.Cos_atlas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder008_01_-_Default_0001_1'].geometry}
          material={materials['Cos_atlas.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Beauty/spray.glb')
