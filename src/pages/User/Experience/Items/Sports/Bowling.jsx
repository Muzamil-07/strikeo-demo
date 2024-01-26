/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function Bowling (props) {
  const { nodes, materials } = useGLTF('/models/Sports/bowling.glb')
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
            item: 'bowling'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BowlingV2.geometry}
        material={materials['BowlingV2Mat.001']}
        scale={0.85}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/bowling.glb')
