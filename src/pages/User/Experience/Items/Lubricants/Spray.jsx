/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function Spray (props) {
  const { nodes, materials } = useGLTF('/models/Lubricants/spray.glb')
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
        geometry={nodes.lubricant_spray_pipe.geometry}
        material={materials.lubricant_spray}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lubricant_spray_tape.geometry}
        material={materials.lubricant_spray}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lubricant_spray_tin.geometry}
        material={materials.lubricant_spray}
      />
    </group>
  )
}

useGLTF.preload('/models/Lubricants/spray.glb')
