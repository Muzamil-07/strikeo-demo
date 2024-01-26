/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function Ruggby (props) {
  const { nodes, materials } = useGLTF('/models/Sports/ruggby.glb')
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
            item: 'ruggby'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AFootballV1.geometry}
        material={materials.AFootballV1Mat}
        scale={1.15}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/ruggby.glb')
