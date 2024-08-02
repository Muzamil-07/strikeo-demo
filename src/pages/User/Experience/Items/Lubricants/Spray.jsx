import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Spray (props) {
  const { nodes, materials } = useGLTF('/models/Lubricants/spray.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cans001.geometry}
        material={materials['helmet/gloves/can']}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
    </group>
  )
}
useGLTF.preload('/models/Lubricants/spray.glb')
