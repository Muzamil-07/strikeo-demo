/* eslint-disable react/no-unknown-property */
import { RigidBody } from '@react-three/rapier'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function RoughPlane () {
  // Load models
  const roughPlane = useGLTF('/roughPlane.glb')

  useEffect(() => {
    // Receive Shadows
    roughPlane.scene.traverse(child => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.receiveShadow = true
      }
    })
  }, [])

  return (
    <RigidBody type='fixed' colliders='trimesh' position={[0, -1.2, 0]}>
      {/* <primitive object={roughPlane.scene} /> */}
      <mesh
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      >
        {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
        <planeBufferGeometry args={[100, 100]} />
        {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
        <meshBasicMaterial color='green' side={THREE.DoubleSide} />
      </mesh>
    </RigidBody>
  )
}
