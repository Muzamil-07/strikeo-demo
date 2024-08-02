import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Table (props) {
  const { nodes, materials } = useGLTF('/models/Table/scene.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.68}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials['comp_desk_b.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_1.geometry}
          material={materials['comp_desk.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_2.geometry}
          material={materials['comp_desk_a.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_3.geometry}
          material={materials['comp_desk_c.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_4.geometry}
          material={materials['setup desk']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Table/scene.glb')
