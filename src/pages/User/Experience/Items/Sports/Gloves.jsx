/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function CricketGloves (props) {
  const { nodes, materials } = useGLTF('/models/Sports/gloves.glb')
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
            item: 'gloves'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cricket_Glove_Gloves_0.geometry}
        material={materials.Gloves}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/gloves.glb')
