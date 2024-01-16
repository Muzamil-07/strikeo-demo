/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function Samsung (props) {
  const { nodes, materials } = useGLTF('/models/Smart Phones/samsung.glb')
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
        navigate('/products/category/Electronics', {
          state: {
            category: 'Electronics',
            item: 'smartphones'
          }
        })
      }}
    >
      <group rotation={[0, 1.571, 0]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.mat_s23_cream}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_2.geometry}
          material={materials.mat_s23_lavender}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Smart Phones/samsung.glb')
