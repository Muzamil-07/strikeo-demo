/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function TableWithLogo (props) {
  const { nodes, materials } = useGLTF('/models/Table/scene.glb')
  return (
    <RigidBody
      colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
      lockTranslations // Lock translations to prevent movement during physics simulation
      lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
      // Position of the wall in 3D space
      // Rotation of the wall in 3D space
    >
      <group {...props} dispose={null}>
        <group rotation={[0, 1.571, 0]} scale={1.13}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WoodenTable_03_drawer02002.geometry}
            material={materials.WoodenTable_03}
            position={[0.412, 0.679, 0.281]}
          />
        </group>
        <group rotation={[0, 1.571, 0]} scale={1.13}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WoodenTable_03_body.geometry}
            material={materials.WoodenTable_03}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WoodenTable_03_drawer03.geometry}
            material={materials.WoodenTable_03}
            position={[0.21, 0.437, 0.281]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve012.geometry}
          material={materials['Fluorescent Lamp']}
          position={[-0.289, 0.717, -0.487]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.821}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models/Table/scene.glb')
