import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function VarietyBalls (props) {
  const { nodes, materials } = useGLTF('/models/Sports/balls.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.balls.geometry}
        material={materials['ball/glove/cap baked']}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/balls.glb')
