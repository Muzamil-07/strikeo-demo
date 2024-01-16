/* eslint-disable react/no-unknown-property */

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function Racket (props) {
  const { nodes, materials } = useGLTF('/models/Sports/racket.glb')
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
            item: 'racket'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisRacketV1.geometry}
        material={materials.TennisRacketV1Mat}
        scale={2.7}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/racket.glb')
