import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BasketBall (props) {
  const { nodes, materials } = useGLTF('/models/Sports/basketball.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AFootballV1003.geometry}
        material={materials['Bowling.003']}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.11}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/basketball.glb')
