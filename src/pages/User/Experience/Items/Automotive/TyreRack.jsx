/* eslint-disable react/no-unknown-property */

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function TyreRack (props) {
  const { nodes, materials } = useGLTF('/models/Automotive/tyre-rack.glb')
  const navigate = useNavigate()

  return (
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

        navigate('/products/category/gears', {
          state: {
            category: 'gears',
            item: 'tyrerack'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mp004.geometry}
        material={materials.Tire}
        position={[0.001, 1.115, -0.332]}
        rotation={[-0.276, 1.571, 0]}
        scale={1.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mp001.geometry}
        material={materials.Tire}
        position={[0.001, 1.115, -0.094]}
        rotation={[-0.276, 1.571, 0]}
        scale={1.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mp002.geometry}
        material={materials.Tire}
        position={[0.001, 0.348, -0.002]}
        rotation={[1.556, Math.PI / 2, 0]}
        scale={1.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TireRack_low005.geometry}
        material={materials['Material #0']}
        position={[0, 0.442, 0]}
        scale={[0.01, 0.008, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TireRack_low008.geometry}
        material={materials['Material #0']}
        position={[0, 0.391, -0.36]}
        scale={[0.01, 0.009, 0.006]}
      />
    </group>
  )
}

useGLTF.preload('/models/Automotive/tyre-rack.glb')
