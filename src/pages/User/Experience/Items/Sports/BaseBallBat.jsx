import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BaseBallBat (props) {
  const { nodes, materials } = useGLTF('/models/Sports/baseballbat.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base_bat.geometry}
        material={materials['basebat baked']}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.189}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/baseballbat.glb')
