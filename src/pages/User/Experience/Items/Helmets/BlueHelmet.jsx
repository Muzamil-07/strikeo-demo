/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function BlueHelmet (props) {
  const { nodes, materials } = useGLTF('/models/Helmets/blue.glb')
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
            item: 'helmet'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base011.geometry}
        material={materials.base}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw001.geometry}
        material={materials['Black Plastic.001']}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw002.geometry}
        material={materials['Black Plastic']}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw003.geometry}
        material={materials.glass}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw005.geometry}
        material={materials['Material.001']}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw006.geometry}
        material={materials.red}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw007.geometry}
        material={materials.red}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw008.geometry}
        material={materials['Black Plastic']}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw009.geometry}
        material={materials['Black Plastic']}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw010.geometry}
        material={materials['Material.002']}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.292}
      />
    </group>
  )
}

useGLTF.preload('/models/Helmets/blue.glb')
