/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function BlueBag (props) {
  const { nodes, materials } = useGLTF('/models/Bags/blue.glb')
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
            item: 'bags'
          }
        })
      }}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube3.geometry}
          material={materials['Black Plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube8.geometry}
          material={materials['Black Plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface4.geometry}
          material={materials['Black Plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials['Black Plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials['Black Plastic']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['Gray white plastic']}
        position={[-0.013, -0.005, 0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials['Gray white plastic']}
        position={[-0.013, -0.005, 0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials['Gray white plastic']}
        position={[-0.013, -0.005, 0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials['Gray white plastic']}
        position={[0.018, -0.035, 0]}
        rotation={[-Math.PI, 0, -1.555]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials['Gray white plastic']}
        position={[-0.027, -0.004, 0]}
        rotation={[-Math.PI, 0, 1.557]}
        scale={0.034}
      />
    </group>
  )
}

useGLTF.preload('/models/Bags/blue.glb')
