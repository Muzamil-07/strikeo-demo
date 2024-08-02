import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop (props) {
  const { nodes, materials } = useGLTF('/models/Computer/laptop.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.strips001.geometry}
        material={materials['ground strips s']}
        scale={0.054}
      />
    </group>
  )
}

useGLTF.preload('/models/Computer/laptop.glb')
