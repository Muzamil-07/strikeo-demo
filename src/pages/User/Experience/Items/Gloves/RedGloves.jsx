/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

export function RedGloves (props) {
  const { nodes, materials } = useGLTF('/models/Gloves/red.glb')
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

        navigate('/products/category/gears', {
          state: {
            category: 'gears',
            item: 'gloves'
          }
        })
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Black Metal Paint']}
        position={[0.885, 4.635, 0]}
        rotation={[-0.016, 0.169, -1.475]}
        scale={0.24}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Brushed aluminium']}
        position={[0.678, 4.668, -1.232]}
        rotation={[-0.134, 0, 0]}
        scale={[0.275, 0.362, 0.272]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['Brushed aluminium']}
        position={[0.87, 4.81, -0.514]}
        rotation={[-0.096, 0, 0]}
        scale={[0.31, 0.408, 0.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials['Brushed aluminium']}
        position={[1.009, 4.914, 0.372]}
        rotation={[-0.005, 0, 0]}
        scale={[0.31, 0.408, 0.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials['Brushed aluminium']}
        position={[1.042, 4.923, 1.174]}
        rotation={[0.086, 0, 0]}
        scale={[0.299, 0.393, 0.295]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Rough Iron Steel']}
        position={[0.417, 6.074, 0.444]}
        rotation={[2.187, 0.32, -1.863]}
        scale={0.181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Rough Iron Steel']}
        position={[0.565, 5.697, 0.506]}
        rotation={[1.36, 0.429, -1.544]}
        scale={[0.171, 0.206, 0.171]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Rough Iron Steel']}
        position={[0.072, 5.972, -0.671]}
        rotation={[2.283, 0.361, -1.94]}
        scale={0.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Rough Iron Steel']}
        position={[0.231, 5.643, -0.643]}
        rotation={[1.44, 0.511, -1.565]}
        scale={[0.153, 0.185, 0.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Rough Iron Steel']}
        position={[-0.393, 5.646, -1.68]}
        rotation={[2.304, 0.383, -2.099]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Rough Iron Steel']}
        position={[-0.207, 5.357, -1.66]}
        rotation={[1.456, 0.636, -1.662]}
        scale={[0.144, 0.173, 0.144]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Rough Iron Steel']}
        position={[0.497, 6.127, 1.672]}
        rotation={[2.456, 0.243, -1.796]}
        scale={0.173}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Rough Iron Steel']}
        position={[0.601, 5.753, 1.624]}
        rotation={[1.653, 0.33, -1.557]}
        scale={[0.163, 0.197, 0.163]}
      />
      <group
        position={[-0.023, 0.083, 0.577]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.45}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['gloves-001-a003'].geometry}
          material={materials['Car leather red']}
          position={[0, 0.677, -0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['gloves-001-a004'].geometry}
          material={materials['Leather.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['protectors-001-a'].geometry}
          material={materials['Car leather red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['stitch-001-a'].geometry}
          material={materials['Default.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Car leather red']}
        position={[0.646, 0.554, 1.36]}
        rotation={[1.616, 0.017, -0.976]}
        scale={0.258}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['Car leather red']}
        position={[0.82, 0.572, 1.14]}
        rotation={[1.602, -0.009, -1.365]}
        scale={0.258}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials['Car leather red']}
        position={[0.894, 0.579, 0.875]}
        rotation={[1.599, -0.025, -1.535]}
        scale={0.258}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials['Car leather red']}
        position={[0.894, 0.588, 0.539]}
        rotation={[1.588, -0.03, -1.556]}
        scale={0.258}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials['Car leather red']}
        position={[0.908, 0.595, 0.382]}
        rotation={[1.568, -0.054, -1.645]}
        scale={0.258}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={materials['Car leather red']}
        position={[0.906, 0.592, 0.098]}
        rotation={[1.572, -0.072, -1.702]}
        scale={0.258}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text006.geometry}
        material={materials['Car leather red']}
        position={[0.89, 0.593, -0.22]}
        rotation={[1.55, 0.05, -1.789]}
        scale={0.239}
      />
    </group>
  )
}

useGLTF.preload('/models/Gloves/red.glb')
