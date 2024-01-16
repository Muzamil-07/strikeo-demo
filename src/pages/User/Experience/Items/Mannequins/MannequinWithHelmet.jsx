/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useNavigate } from 'react-router-dom'

export function MannequinWithHelmet (props) {
  const { nodes, materials } = useGLTF(
    '/models/Mannequins/newManwithHelmet.glb'
  )

  const navigate = useNavigate()

  return (
    <RigidBody
      colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
      lockTranslations // Lock translations to prevent movement during physics simulation
      lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
    >
      <group
        {...props}
        dispose={null}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()
          console.log('---->', event.object)
          navigate('/products/category/apparel', {
            state: {
              category: 'apparel',
              item: 'mannequinwithhelmet'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vizer002.geometry}
          material={materials.PaletteMaterial001}
          position={[0.007, 1.397, 0.008]}
          rotation={[Math.PI, -0.891, Math.PI]}
          scale={0.244}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vizer_Screw004.geometry}
          material={materials.PaletteMaterial002}
          position={[0.007, 1.397, 0.008]}
          rotation={[Math.PI, -0.891, Math.PI]}
          scale={0.244}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.spoiler002.geometry}
          material={materials.PaletteMaterial003}
          position={[0.007, 1.397, 0.008]}
          rotation={[Math.PI, -0.891, Math.PI]}
          scale={0.244}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2009.geometry}
          material={materials.shoe}
          position={[-0.016, 0.11, -0.004]}
          rotation={[-Math.PI / 2, 0, -2.343]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Leather_0001.geometry}
          material={materials['jacket main']}
          position={[0.023, 1.096, 0.01]}
          rotation={[3.139, 0.625, -3.108]}
          scale={[0.01, 0.008, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BikerJacket_Metals_0001.geometry}
          material={materials['jacket button']}
          position={[-0.049, 1.007, -0.097]}
          rotation={[3.139, 0.625, -3.108]}
          scale={[0.01, 0.008, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JEANS_BACK_0.geometry}
          material={materials.jeans}
          position={[0.02, 0.523, 0.013]}
          rotation={[3.008, -0.997, 3.04]}
          scale={[0.81, 0.96, 0.959]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base002.geometry}
          material={materials['helmet base']}
          position={[0.007, 1.397, 0.008]}
          rotation={[Math.PI, -0.891, Math.PI]}
          scale={0.244}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models/Mannequins/MannequinWithHelmet.glb')
