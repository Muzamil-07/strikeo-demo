import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cap (props) {
  const { nodes, materials } = useGLTF('/models/Sports/cap.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cap.geometry}
        material={materials['ball/glove/cap baked']}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/cap.glb')
