import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function VollyBall (props) {
  const { nodes, materials } = useGLTF('/models/Sports/vollyball.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AFootballV1004.geometry}
        material={materials.Bowling}
        rotation={[0, 1.571, 0]}
        scale={0.103}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/vollyball.glb')
