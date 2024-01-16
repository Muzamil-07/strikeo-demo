/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function BlackShoes (props) {
  const { nodes, materials } = useGLTF('/models/Shoes/black.glb')
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
            item: 'shoes'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2005.geometry}
        material={materials['wire_177028149.003']}
        position={[0.008, 0.129, 0]}
        rotation={[-Math.PI / 2, 0, -1.574]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/Shoes/black.glb')
