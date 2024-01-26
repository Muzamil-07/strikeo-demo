/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function Bat (props) {
  const { nodes, materials } = useGLTF('/models/Sports/bat.glb')
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
            item: 'bat'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bat_Bat1_0.geometry}
        material={materials.Bat1}
        position={[0, 0.504, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/bat.glb')
