import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bowling (props) {
  const { nodes, materials } = useGLTF('/models/Sports/bowling.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AFootballV1001.geometry}
        material={materials['Bowling.002']}
        rotation={[0, 1.571, 0]}
        scale={0.101}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/bowling.glb')
