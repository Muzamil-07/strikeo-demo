/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Facewash (props) {
  const { nodes, materials } = useGLTF('/models/Beauty/face_wash.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.facewash3.geometry}
        material={materials.Cos_atlas}
        rotation={[-1.571, -0.01, 3.082]}
        scale={0.022}
      />
    </group>
  )
}

useGLTF.preload('/models/Beauty/face_wash.glb')
