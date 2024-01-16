/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function VollyBall (props) {
  const { nodes, materials } = useGLTF('/models/Sports/vollyball.glb')
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
            item: 'vollyball'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VolleyballV1.geometry}
        material={materials.VolleyballV1Mat}
        scale={0.843}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/vollyball.glb')
