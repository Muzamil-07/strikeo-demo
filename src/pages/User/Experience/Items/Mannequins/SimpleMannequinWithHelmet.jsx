import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SimpleMannequinWithHelmet (props) {
  const { nodes, materials } = useGLTF(
    '/models/Mannequins/newManwithHelmet.glb'
  )
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.02, 0.687, -0.005]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.008, 0.006, 0.006]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Leather_0001.geometry}
          material={materials['manequins baked.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Leather_0001_1.geometry}
          material={materials['gold helmet baked']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Leather_0001_2.geometry}
          material={materials['shoes/bat/pads baked']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Mannequins/newManwithHelmet.glb')
