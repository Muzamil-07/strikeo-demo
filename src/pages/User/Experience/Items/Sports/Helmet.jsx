import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CricketHelmet (props) {
  const { nodes, materials } = useGLTF('/models/Sports/helmet.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Helmet_CricketEquipments_0.geometry}
        material={materials.CricketEquipments}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/helmet.glb')
