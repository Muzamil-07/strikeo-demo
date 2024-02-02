/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Character (props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Floating Character.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='KayKit_Animated_Character'>
          <skinnedMesh
            name='outline'
            geometry={nodes.outline.geometry}
            material={materials.outline}
            skeleton={nodes.outline.skeleton}
          />
          <skinnedMesh
            name='PrototypePete'
            geometry={nodes.PrototypePete.geometry}
            material={materials.PrototypePete}
            skeleton={nodes.PrototypePete.skeleton}
          />
          <primitive object={nodes.Body} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Floating Character.glb')
