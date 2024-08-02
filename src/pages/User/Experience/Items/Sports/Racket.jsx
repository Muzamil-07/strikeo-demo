import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Racket (props) {
  const { nodes, materials } = useGLTF('/models/Sports/racket.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Racket.geometry}
        material={materials['basebat baked']}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.189}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/racket.glb')
