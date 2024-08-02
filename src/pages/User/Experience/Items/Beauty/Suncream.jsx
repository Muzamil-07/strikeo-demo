/* eslint-disable react/no-unknown-property */
// models/Beauty/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Suncream (props) {
  const { nodes, materials } = useGLTF('/models/Beauty/suncream.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sunscreen001.geometry}
        material={materials.Cos_atlas}
        rotation={[-1.611, -0.019, -2.044]}
        scale={[0.016, 0.017, 0.012]}
      />
    </group>
  )
}

useGLTF.preload('/models/Beauty/suncream.glb')
