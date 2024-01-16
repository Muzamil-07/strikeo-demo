/* eslint-disable react/no-unknown-property */
'use client'
import {
  MeshReflectorMaterial,
  OrbitControls,
  Preload,
  SoftShadows,
  Stage
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import * as THREE from 'three'
import CanvasLoader from './CanvasLoader'

const ModelCanvas = ({ children, autoRotate = true }) => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 6, 6]
      }}
    >
      <SoftShadows size={4} samples={20} focus={1} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          makeDefault
          autoRotate={autoRotate}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <mesh>
          <directionalLight position={[4, 0, 6]} intensity={1.2} />
          <directionalLight position={[-4, 0, -6]} intensity={1.2} />
          <directionalLight castShadow position={[0, 5, 0]} intensity={0.3} />
          <pointLight position={[0, -3, 0]} intensity={1.5} />
          <ambientLight intensity={1} />
          {children}
        </mesh>

        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position-y={-1.8}>
          <planeGeometry args={[170, 170]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default ModelCanvas
