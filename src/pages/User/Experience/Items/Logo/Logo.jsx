/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Logo (props) {
  const { nodes, materials } = useGLTF('/models/Logo/logo.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo.geometry}
        material={materials['wall logo']}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.048}
      />
    </group>
  )
}

useGLTF.preload('/models/Logo/logo.glb')
