/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function FootballBlack (props) {
  const { nodes, materials } = useGLTF('/models/Sports/football.glb')
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
        console.log('---->', event.object)
        navigate('/products/category/sports', {
          state: {
            category: 'sports',
            item: 'football'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SoccerV1.geometry}
        material={materials.SoccerV1Mat}
        scale={0.891}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/football.glb')
