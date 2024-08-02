import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Rugby (props) {
  const { nodes, materials } = useGLTF('/models/Sports/rugby.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Footballs001.geometry}
        material={materials['balls baked.001']}
        rotation={[0, 1.571, 0]}
        scale={0.138}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/rugby.glb')
