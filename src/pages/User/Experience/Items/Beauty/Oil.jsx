/* eslint-disable react/no-unknown-property */
// models/Beauty/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Oil (props) {
  const { nodes, materials } = useGLTF('/models/Beauty/oil.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cosmetics_(_face_wasg_)_poduct'].geometry}
        material={materials.Cos_atlas}
        rotation={[-Math.PI, 0.509, -Math.PI]}
        scale={0.551}
      />
    </group>
  )
}

useGLTF.preload('/models/Beauty/oil.glb')
