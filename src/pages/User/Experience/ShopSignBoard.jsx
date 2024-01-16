/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ShopSignBoard (props) {
  const { nodes, materials } = useGLTF('/models/Sign Board/scene.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane201.geometry}
        material={materials['Material.032']}
        position={[2.057, 2.118, -2.078]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube125.geometry}
        material={materials['Black Plastic.001']}
        position={[2.226, 2.121, -2.074]}
        scale={[0.177, 0.177, 0.652]}
      />
    </group>
  )
}

useGLTF.preload('/models/Sign Board/scene.glb')
