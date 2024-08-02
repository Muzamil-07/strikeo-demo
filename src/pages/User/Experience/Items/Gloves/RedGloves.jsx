import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RedGloves (props) {
  const { nodes, materials } = useGLTF('/models/Gloves/red.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gloves2.geometry}
        material={materials['helmet/gloves/can']}
        rotation={[-2.919, 0, -Math.PI]}
        scale={12}
      />
    </group>
  )
}

useGLTF.preload('/models/Gloves/red.glb')
