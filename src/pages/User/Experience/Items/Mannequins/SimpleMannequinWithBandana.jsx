import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SimpleMannequinWithBandana (props) {
  const { nodes, materials } = useGLTF('/models/Mannequins/manq.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buttons002.geometry}
        material={nodes.buttons002.material}
        position={[-0.048, 0.596, -0.038]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.007}
      />
      <group
        position={[0.005, 0.83, 0.005]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.008, 0.006, 0.006]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Leather_0002.geometry}
          material={materials['manequins baked.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Leather_0002_1.geometry}
          material={materials['shoes/bat/pads baked']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Leather_0002_2.geometry}
          material={materials.GLASSES}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Leather_0002_3.geometry}
          material={materials['bandana white.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Leather_0002_4.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
    </group>
  )
}
useGLTF.preload('/models/Mannequins/manq.glb')
