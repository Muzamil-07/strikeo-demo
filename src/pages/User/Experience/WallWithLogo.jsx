/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function WallWithLogo (props) {
  const { nodes, materials } = useGLTF('/models/Wall with Logo/scene.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane208.geometry}
        material={materials['White Wall 02-Freepoly.org']}
        position={[2.416, 1.517, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.529, 13.787, 3.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve011.geometry}
        material={materials['Shiny Metal']}
        position={[2.392, 1.411, -0.837]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.862, 2.066, 1.862]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials['Shiny Metal']}
        position={[2.399, 1.631, -0.408]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.992}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials['Shiny Metal']}
        position={[2.387, 1.411, -0.837]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.862, 2.066, 1.862]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['Shiny Metal']}
        position={[2.388, 1.411, -0.837]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.862, 2.066, 1.862]}
      />
    </group>
  )
}

useGLTF.preload('/models/Wall with Logo/scene.glb')
