/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function WallWithoutLogo (props) {
  const { nodes, materials } = useGLTF('/models/Wall without Logo/scene.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane208.geometry}
        material={materials['White Wall 02-Freepoly.org']}
        position={[2.416, 1.517, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.529, 13.787, 3.763]}
      />
    </group>
  )
}

useGLTF.preload('/models/Wall without Logo/scene.glb')
