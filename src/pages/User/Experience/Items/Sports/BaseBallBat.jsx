/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function BaseBallBat (props) {
  const { nodes, materials } = useGLTF('/models/Sports/baseballbat.glb')
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
            item: 'baseballbat'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BaseballBatV1.geometry}
        material={materials.BaseballBatV1Mat}
        position={[0, -1.138, 0]}
        scale={3.6}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/baseballbat.glb')
