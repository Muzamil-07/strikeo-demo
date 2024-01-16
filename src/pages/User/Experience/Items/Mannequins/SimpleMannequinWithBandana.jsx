/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function SimpleMannequinWithBandana (props) {
  const { nodes, materials } = useGLTF('/models/Mannequins/manq.glb')

  const navigate = useNavigate()
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.JEANS_BACK_0001.geometry}
        material={materials.jeans}
        position={[0.014, 0.54, 0.018]}
        rotation={[3.016, -0.929, 3.068]}
        scale={[0.753, 0.933, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['bandana white']}
        position={[-0.031, 1.28, -0.033]}
        rotation={[-1.577, 0.003, -2.439]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['bandana black']}
        position={[-0.01, 1.279, -0.007]}
        rotation={[-1.577, 0.003, -2.439]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['t-shirt'].geometry}
        material={materials.cloth}
        position={[-0.006, 0.983, 0.003]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lenses.geometry}
        material={materials['Aviator Glasses']}
        position={[-0.064, 1.373, -0.064]}
        rotation={[-3.116, -0.772, -3.107]}
        scale={0.829}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2018.geometry}
        material={materials.shoe}
        position={[-0.003, 0.107, 0.009]}
        rotation={[-Math.PI / 2, 0, -2.462]}
        scale={0.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buttons001.geometry}
        material={nodes.buttons001.material}
        position={[-0.065, 0.996, -0.06]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.008}
      />
    </group>
  )
}

useGLTF.preload('/models/Mannequins/manq.glb')
