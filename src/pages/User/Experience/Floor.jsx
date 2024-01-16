/* eslint-disable react/no-unknown-property */
import { Stage, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

const Floor = () => {
  const base = useTexture('/models/Floor/base.png')
  base.flipY = true
  console.log(base)
  const normal = useTexture('/models/Floor/normal.jpg')
  const roughness = useTexture('/models/Floor/roughness.jpg')

  return (
    // <Stage scale={0.01} environment='city' intensity={0.9} castShadow={false}>
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position-y={-1.2}>
      <planeGeometry attach='geometry' args={[90, 80]} position={[0, 1, 0]} />
      <meshStandardMaterial
        map={base}
        normalMap={normal}
        //   side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Floor
