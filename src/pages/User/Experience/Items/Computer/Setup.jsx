/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function Setup (props) {
  const { nodes, materials } = useGLTF('/models/Computer/setup.glb')
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
            item: '',
            playVideo: true
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_text__0.geometry}
        material={materials.text}
        position={[-0.539, 0.646, -0.054]}
        rotation={[-1.622, 0, 0]}
        scale={0.122}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018_button__0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.539, 0.751, 0.08]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006_scareen__0.geometry}
        material={materials.scareen}
        position={[-0.539, 0.751, 0.08]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_body__0.geometry}
        material={materials.body}
        position={[-0.539, 0.751, 0.08]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_red_text__0.geometry}
        material={materials.red_text}
        position={[-0.539, 0.633, 0.032]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.122}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['material.001']}
        position={[0.475, 0.785, 0.111]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.04}
      />
      <group
        position={[0.023, 0.792, 0.019]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4002.geometry}
          material={materials['monitor.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4002_1.geometry}
          material={materials['Material.002']}
        />
      </group>
      <group
        position={[0, -0.008, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.838}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.comp_desk_b}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2_1.geometry}
          material={materials.comp_desk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2_2.geometry}
          material={materials.comp_desk_a}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2_3.geometry}
          material={materials.comp_desk_c}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.comp_desk_top}
        position={[0.004, 0.598, 0.093]}
        scale={0.838}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo2.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.298, 0.776, 0.28]}
        rotation={[-1.884, 0.144, -0.418]}
        scale={1.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Headphone_Stand_Aluminum.geometry}
        material={materials.PaletteMaterial003}
        position={[-0.286, 0.669, 0.212]}
        rotation={[0, -0.018, 0]}
        scale={0.893}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head_band.geometry}
        material={materials['Fine leather black']}
        position={[-0.298, 0.776, 0.28]}
        rotation={[-1.884, 0.144, -0.418]}
        scale={1.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7001.geometry}
        material={materials.PaletteMaterial004}
        position={[0.49, 0.977, 0.081]}
        rotation={[-Math.PI / 2, 0, -0.736]}
        scale={0.002}
      />
    </group>
  )
}

useGLTF.preload('/models/Computer/setup.glb')
