import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung (props) {
  const { nodes, materials } = useGLTF('/models/Smart Phones/samsung.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mobile_green001.geometry}
        material={materials['mobile 2']}
        rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
        scale={0.754}
      />
    </group>
  )
}

useGLTF.preload('/models/Smart Phones/samsung.glb')
