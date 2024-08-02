import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SimpleBike (props) {
  const { nodes, materials } = useGLTF('/models/Automotive/bike.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[3.137, -0.891, Math.PI]} scale={0.157}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.bike}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_1.geometry}
          material={materials['TYRE BIKE S']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Automotive/bike.glb')
