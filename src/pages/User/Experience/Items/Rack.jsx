/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { Detailed, useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Rack (props) {
  const { nodes, materials } = useGLTF('/models/Rack/scene.glb')
  return (
    <group {...props} dispose={null}>
      {/* <RigidBody
        colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
        lockTranslations // Lock translations to prevent movement during physics simulation
        lockRotations // Lock rotations to prevent unwanted rotations during physics simulation

      > */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barres_métal002.geometry}
        material={materials.PaletteMaterial002}
        position={[2.176, 0, 1.393]}
        rotation={[0, -1.571, 0]}
        scale={1.124}
      />
      {/* </RigidBody> */}

      {/* <RigidBody
        colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
        lockTranslations // Lock translations to prevent movement during physics simulation
        lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
        // Position of the wall in 3D space
        // Rotation of the wall in 3D space
      > */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poignée_métal_noir002.geometry}
        material={materials.PaletteMaterial003}
        position={[2.176, 0, 1.393]}
        rotation={[0, -1.571, 0]}
        scale={1.124}
      />
      {/* </RigidBody> */}
    </group>
  )
}

useGLTF.preload('/models/Rack/scene.glb')
