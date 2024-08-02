/* eslint-disable react/no-unknown-property */
// models/Beauty
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Foundation (props) {
  const { nodes, materials } = useGLTF('models/Beauty/foundation.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.foundation2.geometry}
        material={materials['Cos_atlas.001']}
        rotation={[-Math.PI / 2, 0, 2.703]}
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload('models/Beauty/foundation.glb')
