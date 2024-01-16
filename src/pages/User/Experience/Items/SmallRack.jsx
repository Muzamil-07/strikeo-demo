/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SmallRack (props) {
  const { nodes, materials } = useGLTF('/models/Rack/small-rack.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barres_métal002.geometry}
        material={materials.PaletteMaterial002}
        rotation={[0, -1.571, 0]}
        scale={1.124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poignée_métal_noir002.geometry}
        material={materials.PaletteMaterial003}
        rotation={[0, -1.571, 0]}
        scale={1.124}
      />
    </group>
  )
}

useGLTF.preload('/models/Rack/small-rack.glb')
