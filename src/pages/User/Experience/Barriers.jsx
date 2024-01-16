/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { RigidBody } from '@react-three/rapier'
import React from 'react'
import * as THREE from 'three'

const Barriers = ({
  geometry,
  transparent,
  position,
  opacity,
  rotation = [0, 0, 0]
}) => {
  return (
    <RigidBody
      colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
      lockTranslations // Lock translations to prevent movement during physics simulation
      lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
    >
      <mesh position={position} rotation={rotation}>
        <planeGeometry attach='geometry' args={geometry} />
        <meshStandardMaterial
          opacity={opacity}
          transparent={transparent}
          color='red'
          side={THREE.DoubleSide}
        />
      </mesh>
    </RigidBody>
  )
}

export default Barriers
