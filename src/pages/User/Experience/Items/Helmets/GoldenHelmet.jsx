/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function GoldenHelmet (props) {
  const { nodes, materials } = useGLTF('/models/Helmets/gold.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base002.geometry}
        material={materials['Material.003']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials['Black Plastic']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials['Black Plastic.001']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials['Material.001']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials['Black Plastic']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.spoiler002.geometry}
        material={materials['Material.001']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer002.geometry}
        material={materials['Piano Black With Fingerprints Plastic PL']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw003.geometry}
        material={materials['Material.001']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer001.geometry}
        material={materials['Piano Black With Fingerprints Plastic PL']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.001']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Black Plastic']}
        position={[0.435, 1.397, 1.453]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.244}
      />
    </group>
  )
}

useGLTF.preload('/models/Helmets/gold.glb')
