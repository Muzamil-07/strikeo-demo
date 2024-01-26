/* eslint-disable react/no-unknown-property */

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function FootBallGold (props) {
  const { nodes, materials } = useGLTF('/models/Sports/football2.glb')
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
            item: 'footballgold'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SoccerV4.geometry}
        material={materials.SoccerV4Mat}
        scale={0.891}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/football2.glb')
