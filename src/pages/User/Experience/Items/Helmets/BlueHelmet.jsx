import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BlueHelmet (props) {
  const { nodes, materials } = useGLTF('/models/Helmets/blue.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.helmets001.geometry}
        material={materials['helmet/gloves/can']}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
    </group>
  )
}

useGLTF.preload('/models/Helmets/blue.glb')
