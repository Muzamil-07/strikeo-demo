import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CricketGloves (props) {
  const { nodes, materials } = useGLTF('/models/Sports/gloves.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sport_gloves.geometry}
        material={materials['ball/glove/cap baked']}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/gloves.glb')
