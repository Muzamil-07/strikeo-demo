import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TyreRack (props) {
  const { nodes, materials } = useGLTF('/models/Automotive/tyre-rack.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.075, 0.202, 0.001]}
        rotation={[0, 0, Math.PI]}
        scale={0.591}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp.geometry}
          material={materials['roof lamps']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamp_1.geometry}
          material={materials['TYRE Baked']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Automotive/tyre-rack.glb')
