/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function CleanerTin (props) {
  const { nodes, materials } = useGLTF('/models/Tins/cleaner.glb')
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
        navigate('/products/category/gears', {
          state: {
            category: 'gears',
            item: 'lubricants'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cleaner_tin_01.geometry}
        material={materials.cleaner_tin_01}
      />
    </group>
  )
}

useGLTF.preload('/models/Tins/cleaner.glb')
