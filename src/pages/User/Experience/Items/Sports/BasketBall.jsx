/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function BasketBall (props) {
  const { nodes, materials } = useGLTF('/models/Sports/basketball.glb')
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
            item: 'basketball'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasketV1.geometry}
        material={materials.BasketV1Mat}
        scale={0.939}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/basketball.glb')
