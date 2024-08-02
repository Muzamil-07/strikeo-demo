/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Apples (props) {
  const { nodes, materials } = useGLTF('/models/Food/apple.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-0.946, 0, 0]} scale={[0.069, 0.069, 0.06]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Box_Material001_0_1.geometry}
          material={materials.Fruit_display_atlas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Box_Material001_0_2.geometry}
          material={materials.Petole}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Food/apple.glb')
