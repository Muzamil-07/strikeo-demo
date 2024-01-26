/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function Pads (props) {
  const { nodes, materials } = useGLTF('/models/Sports/pads.glb')
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

        navigate('/products/category/sports', {
          state: {
            category: 'sports',
            item: 'pads'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Strap_CricketEquipments_0.geometry}
        material={materials['CricketEquipments.001']}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/pads.glb')
