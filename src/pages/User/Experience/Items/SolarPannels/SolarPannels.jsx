/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SolarPannels (props) {
  const { nodes, materials } = useGLTF('/models/Solar Pannels/scene.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.solar_panel_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial001.geometry}
        material={materials.solar_panel_glass}
      />
    </group>
  )
}

useGLTF.preload('/models/Solar Pannels/scene.glb')
