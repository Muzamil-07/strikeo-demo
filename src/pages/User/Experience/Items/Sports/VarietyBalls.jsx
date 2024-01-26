/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function VarietyBalls (props) {
  const { nodes, materials } = useGLTF('/models/Sports/balls.glb')
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
            item: 'varietyballs'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisV2.geometry}
        material={materials.TennisV2Mat}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisV1.geometry}
        material={materials.TennisV1Mat}
        position={[-1.242, 0, 0]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BaseballV1.geometry}
        material={materials.BaseballV1Mat}
        position={[1.942, 0, 0]}
        scale={0.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BaseballV1001.geometry}
        material={materials.BaseballV1Mat}
        position={[1.313, 0, 0]}
        scale={0.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisV1001.geometry}
        material={materials.TennisV1Mat}
        position={[-0.662, 0, 0]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisV2001.geometry}
        material={materials.TennisV2Mat}
        position={[0.629, 0, 0]}
        scale={0.27}
      />
    </group>
  )
}

useGLTF.preload('/models/Sports/balls.glb')
