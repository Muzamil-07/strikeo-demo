/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function Laptop (props) {
  const { nodes, materials } = useGLTF('/models/Computer/laptop.glb')
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
            item: 'laptop'
          }
        })
      }}
    >
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_scareen__0.geometry}
            material={materials.scareen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_screen_back__0.geometry}
            material={materials.screen_back}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_text__0.geometry}
          material={materials.text}
          position={[0, -9.947, -12.676]}
          rotation={[-1.622, 0, 0]}
          scale={11.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_white_text__0.geometry}
          material={materials.white_text}
          position={[0, -11.197, -4.564]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_red_text__0.geometry}
          material={materials.red_text}
          position={[0, -11.197, -4.564]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_body__0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_black__0.geometry}
          material={materials.black}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_camaera__0.geometry}
          material={materials.camaera}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_DOT_0.geometry}
          material={materials['material.001']}
          position={[0, -11.197, -4.564]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_body_metal_0.geometry}
          material={materials.body_metal}
          position={[0, -11.197, -4.564]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018_button__0.geometry}
          material={materials.button}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_balck__0.geometry}
          material={materials.balck}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_charge_point__0.geometry}
          material={materials.charge_point}
          position={[0, -11.197, -4.564]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037_rubber_0.geometry}
          material={materials.rubber}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Computer/laptop.glb')
