/* eslint-disable react/no-unknown-property */

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier' // Components for handling physics.
import { useNavigate } from 'react-router-dom'

export function Bike (props) {
  const { nodes, materials } = useGLTF('/models/Automotive/bike.glb')
  const navigate = useNavigate()

  return (
    <RigidBody
      colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
      lockTranslations // Lock translations to prevent movement during physics simulation
      lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
      // Position of the wall in 3D space
      // Rotation of the wall in 3D space
    >
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
              item: 'bike'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3008'].geometry}
          material={materials.silverh2}
          position={[-0.153, 0.932, 0.076]}
          rotation={[1.792, -0.864, 1.673]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3007'].geometry}
          material={materials.silverh2}
          position={[-0.145, 0.939, 0.077]}
          rotation={[1.792, -0.864, 1.673]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3006'].geometry}
          material={materials.silverh2}
          position={[-0.153, 0.937, 0.063]}
          rotation={[1.792, -0.864, 1.673]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3005'].geometry}
          material={materials.silverh2}
          position={[-0.154, 0.941, 0.045]}
          rotation={[1.792, -0.864, 1.673]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3004'].geometry}
          material={materials.silverh2}
          position={[-0.153, 0.945, 0.029]}
          rotation={[1.792, -0.864, 1.673]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3003'].geometry}
          material={materials.silverh2}
          position={[-0.152, 0.948, 0.012]}
          rotation={[1.792, -0.864, 1.673]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3002'].geometry}
          material={materials.silverh2}
          position={[-0.15, 0.952, -0.008]}
          rotation={[1.792, -0.864, 1.673]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3001'].geometry}
          material={materials.silverh2}
          position={[-0.149, 0.954, -0.031]}
          rotation={[1.792, -0.864, 1.673]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3'].geometry}
          material={materials.silverh2}
          position={[-0.144, 0.957, -0.049]}
          rotation={[1.792, -0.864, 1.673]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#2008'].geometry}
          material={materials.silverh2}
          position={[0.162, 0.953, -0.055]}
          rotation={[1.819, 0.671, -1.649]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#2007'].geometry}
          material={materials.silverh2}
          position={[0.155, 0.961, -0.053]}
          rotation={[1.819, 0.671, -1.649]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#2006'].geometry}
          material={materials.silverh2}
          position={[0.164, 0.953, -0.042]}
          rotation={[1.819, 0.671, -1.649]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#2005'].geometry}
          material={materials.silverh2}
          position={[0.168, 0.95, -0.024]}
          rotation={[1.819, 0.671, -1.649]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#2004'].geometry}
          material={materials.silverh2}
          position={[0.169, 0.948, -0.008]}
          rotation={[1.819, 0.671, -1.649]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#2003'].geometry}
          material={materials.silverh2}
          position={[0.171, 0.945, 0.01]}
          rotation={[1.819, 0.671, -1.649]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#2002'].geometry}
          material={materials.silverh2}
          position={[0.171, 0.942, 0.03]}
          rotation={[1.819, 0.671, -1.649]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#2001'].geometry}
          material={materials.silverh2}
          position={[0.173, 0.936, 0.051]}
          rotation={[1.819, 0.671, -1.649]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#2'].geometry}
          material={materials.silverh2}
          position={[0.171, 0.932, 0.07]}
          rotation={[1.819, 0.671, -1.649]}
          scale={0.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281029'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.297, 0.736]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281028'].geometry}
          material={materials.grayh2r2}
          position={[-0.077, 0.36, 0.664]}
          rotation={[1.904, 0.001, 0.003]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281027'].geometry}
          material={materials.grayh2r2}
          position={[-0.076, 0.354, 0.567]}
          rotation={[0.648, -0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281026'].geometry}
          material={materials.grayh2r2}
          position={[-0.076, 0.26, 0.542]}
          rotation={[-0.609, -0.003, -0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281025'].geometry}
          material={materials.grayh2r2}
          position={[-0.076, 0.207, 0.624]}
          rotation={[-1.866, 0.001, -0.003]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281024'].geometry}
          material={materials.grayh2r2}
          position={[-0.077, 0.269, 0.7]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281023'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.353, 0.521]}
          rotation={[0.648, -0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281022'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.399, 0.577]}
          rotation={[1.276, -0.001, 0.003]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281021'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.403, 0.649]}
          rotation={[1.904, 0.001, 0.003]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281020'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.364, 0.71]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281019'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.216, 0.529]}
          rotation={[-0.609, -0.003, -0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281018'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.284, 0.503]}
          rotation={[0.019, -0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281017'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.181, 0.662]}
          rotation={[-1.866, 0.001, -0.003]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281016'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.177, 0.59]}
          rotation={[-1.237, -0.001, -0.003]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281015'].geometry}
          material={materials.grayh2r2}
          position={[-0.079, 0.227, 0.718]}
          rotation={[-2.494, 0.003, -0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281014'].geometry}
          material={materials.grayh2r2}
          position={[0.09, 0.297, 0.737]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281013'].geometry}
          material={materials.grayh2r2}
          position={[0.088, 0.36, 0.664]}
          rotation={[-1.237, -0.001, -0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281012'].geometry}
          material={materials.grayh2r2}
          position={[0.088, 0.354, 0.567]}
          rotation={[-2.494, 0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281011'].geometry}
          material={materials.grayh2r2}
          position={[0.088, 0.26, 0.543]}
          rotation={[2.532, 0.003, 0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281010'].geometry}
          material={materials.grayh2r2}
          position={[0.088, 0.207, 0.625]}
          rotation={[1.276, -0.001, 0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281009'].geometry}
          material={materials.grayh2r2}
          position={[0.088, 0.269, 0.7]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281008'].geometry}
          material={materials.grayh2r2}
          position={[0.091, 0.353, 0.522]}
          rotation={[-2.494, 0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281007'].geometry}
          material={materials.grayh2r2}
          position={[0.091, 0.399, 0.578]}
          rotation={[-1.866, 0.001, -0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281006'].geometry}
          material={materials.grayh2r2}
          position={[0.09, 0.403, 0.65]}
          rotation={[-1.237, -0.001, -0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281005'].geometry}
          material={materials.grayh2r2}
          position={[0.09, 0.364, 0.711]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281004'].geometry}
          material={materials.grayh2r2}
          position={[0.091, 0.216, 0.53]}
          rotation={[2.532, 0.003, 0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281003'].geometry}
          material={materials.grayh2r2}
          position={[0.091, 0.284, 0.503]}
          rotation={[-3.122, 0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281002'].geometry}
          material={materials.grayh2r2}
          position={[0.09, 0.181, 0.662]}
          rotation={[1.276, -0.001, 0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281001'].geometry}
          material={materials.grayh2r2}
          position={[0.09, 0.177, 0.59]}
          rotation={[1.904, 0.001, 0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281'].geometry}
          material={materials.grayh2r2}
          position={[0.09, 0.227, 0.718]}
          rotation={[0.648, -0.003, 0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#280001'].geometry}
          material={materials['[Color A05]']}
          position={[0.12, 0.541, 0.519]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#280'].geometry}
          material={materials['[Color A05]']}
          position={[-0.108, 0.541, 0.518]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#266001'].geometry}
          material={materials.blackglossh2r}
          position={[0.246, 0.53, 0.067]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#266'].geometry}
          material={materials.blackglossh2r}
          position={[-0.232, 0.53, 0.066]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252007'].geometry}
          material={materials.silverh2}
          position={[-0.091, 1.005, 0.487]}
          rotation={[0.811, 0.036, 2.239]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252006'].geometry}
          material={materials.silverh2}
          position={[-0.061, 0.968, 0.549]}
          rotation={[0.811, 0.036, 2.239]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252005'].geometry}
          material={materials.silverh2}
          position={[-0.117, 1.047, 0.421]}
          rotation={[0.798, 0.126, 2.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252004'].geometry}
          material={materials.silverh2}
          position={[-0.142, 1.089, 0.356]}
          rotation={[0.926, 0.012, 2.429]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252003'].geometry}
          material={materials.silverh2}
          position={[0.073, 0.968, 0.549]}
          rotation={[-2.33, 0.04, 2.235]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252002'].geometry}
          material={materials.silverh2}
          position={[0.155, 1.089, 0.357]}
          rotation={[-2.216, 0.016, 2.424]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252001'].geometry}
          material={materials.silverh2}
          position={[0.103, 1.005, 0.488]}
          rotation={[-2.33, 0.04, 2.235]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252'].geometry}
          material={materials.silverh2}
          position={[0.13, 1.047, 0.422]}
          rotation={[-2.343, 0.13, 2.385]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251010'].geometry}
          material={materials.silverh2}
          position={[0.2, 0.413, -0.065]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251009'].geometry}
          material={materials.silverh2}
          position={[0.2, 0.341, -0.028]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251008'].geometry}
          material={materials.silverh2}
          position={[0.2, 0.35, 0.063]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251007'].geometry}
          material={materials.silverh2}
          position={[0.199, 0.45, 0.097]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251006'].geometry}
          material={materials.silverh2}
          position={[0.199, 0.471, 0.071]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251005'].geometry}
          material={materials.silverh2}
          position={[0.199, 0.484, 0.028]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251004'].geometry}
          material={materials.silverh2}
          position={[0.2, 0.479, -0.022]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251003'].geometry}
          material={materials.silverh2}
          position={[0.135, 0.521, -0.195]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251002'].geometry}
          material={materials.silverh2}
          position={[0.162, 0.444, -0.097]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251001'].geometry}
          material={materials.silverh2}
          position={[0.162, 0.499, -0.089]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251'].geometry}
          material={materials.silverh2}
          position={[0.162, 0.502, -0.114]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250017'].geometry}
          material={materials.enginegray}
          position={[-0.115, 0.604, -0.053]}
          rotation={[-3.122, 0.003, 1.571]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250016'].geometry}
          material={materials.enginegray}
          position={[-0.126, 0.598, -0.213]}
          rotation={[-3.122, 0.003, 1.571]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250015'].geometry}
          material={materials.enginegray}
          position={[-0.131, 0.594, -0.172]}
          rotation={[-3.122, 0.003, 1.571]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250014'].geometry}
          material={materials.enginegray}
          position={[-0.119, 0.599, -0.116]}
          rotation={[-3.122, 0.003, 1.571]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250013'].geometry}
          material={materials.enginegray}
          position={[-0.161, 0.544, -0.19]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250012'].geometry}
          material={materials.enginegray}
          position={[-0.161, 0.49, -0.222]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250011'].geometry}
          material={materials.enginegray}
          position={[-0.161, 0.439, -0.229]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250010'].geometry}
          material={materials.enginegray}
          position={[-0.161, 0.372, -0.245]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250009'].geometry}
          material={materials.enginegray}
          position={[-0.161, 0.309, -0.231]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250008'].geometry}
          material={materials.enginegray}
          position={[-0.161, 0.294, -0.139]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250007'].geometry}
          material={materials.enginegray}
          position={[-0.161, 0.341, -0.081]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250006'].geometry}
          material={materials.enginegray}
          position={[-0.162, 0.36, 0.038]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250005'].geometry}
          material={materials.enginegray}
          position={[-0.162, 0.417, 0.09]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250004'].geometry}
          material={materials.enginegray}
          position={[-0.161, 0.574, -0.127]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250003'].geometry}
          material={materials.enginegray}
          position={[-0.161, 0.572, -0.061]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250002'].geometry}
          material={materials.enginegray}
          position={[-0.162, 0.559, 0.001]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250001'].geometry}
          material={materials.enginegray}
          position={[-0.162, 0.474, 0.107]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250'].geometry}
          material={materials.enginegray}
          position={[-0.162, 0.51, 0.051]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#243005'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.23, 0.473, 0.19]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#243004'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.244, 0.56, 0.226]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#243003'].geometry}
          material={materials.carbonh2r}
          position={[-0.283, 0.514, 0.34]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#243002'].geometry}
          material={materials.carbonh2r}
          position={[-0.24, 0.557, 0.229]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#243001'].geometry}
          material={materials.carbonh2r}
          position={[0.236, 0.469, 0.203]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#243'].geometry}
          material={materials.carbonh2r}
          position={[-0.222, 0.469, 0.201]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#234001'].geometry}
          material={materials.silverh2}
          position={[-0.125, 0.605, -0.187]}
          rotation={[1.59, 0, 1.574]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#234'].geometry}
          material={materials.silverh2}
          position={[-0.125, 0.653, -0.136]}
          rotation={[1.59, 0, 1.574]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#231001'].geometry}
          material={materials.logoh2r2}
          position={[-0.142, 0.894, -0.687]}
          rotation={[-1.28, 0.485, 1.571]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#231'].geometry}
          material={materials.logoh2r2}
          position={[0.16, 0.911, -0.726]}
          rotation={[1.862, 0.452, -1.571]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#228003'].geometry}
          material={materials.silverh2}
          position={[-0.152, 0.881, 0.338]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#228002'].geometry}
          material={materials.silverh2}
          position={[0.165, 0.881, 0.339]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#228001'].geometry}
          material={materials.silverh2}
          position={[-0.161, 0.905, 0.336]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#228'].geometry}
          material={materials.silverh2}
          position={[0.174, 0.905, 0.337]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#222002'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.106, 0.904, -0.679]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#222001'].geometry}
          material={materials['black plastic h2r']}
          position={[0.124, 0.879, -0.707]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#222'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.105, 0.879, -0.708]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#218001'].geometry}
          material={materials.blackglossh2r}
          position={[-0.237, 0.627, 0.419]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#218'].geometry}
          material={materials.blackglossh2r}
          position={[0.249, 0.627, 0.421]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#217003'].geometry}
          material={materials.silverh2}
          position={[-0.023, 0.847, -0.753]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#217002'].geometry}
          material={materials.silverh2}
          position={[-0.019, 0.878, -0.792]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#217001'].geometry}
          material={materials.silverh2}
          position={[0.043, 0.847, -0.753]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#217'].geometry}
          material={materials.silverh2}
          position={[0.039, 0.878, -0.792]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215046'].geometry}
          material={materials.silverh2}
          position={[0.277, 0.547, 0.331]}
          rotation={[0.472, -0.624, 1.578]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215045'].geometry}
          material={materials.silverh2}
          position={[0.231, 0.512, 0.121]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215044'].geometry}
          material={materials.silverh2}
          position={[0.243, 0.519, 0.036]}
          rotation={[-0.609, -0.003, -0.002]}
          scale={0.524}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215043'].geometry}
          material={materials.silverh2}
          position={[-0.264, 0.547, 0.329]}
          rotation={[-2.672, -0.618, 1.574]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215042'].geometry}
          material={materials.silverh2}
          position={[-0.217, 0.512, 0.119]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215041'].geometry}
          material={materials.silverh2}
          position={[-0.227, 0.519, 0.034]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-0.524}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215040'].geometry}
          material={materials.silverh2}
          position={[-0.225, 0.747, 0.246]}
          rotation={[-0.716, 0.226, -1]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215039'].geometry}
          material={materials.silverh2}
          position={[0.099, 0.967, 0.132]}
          rotation={[-2.502, -0.355, 2.018]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215038'].geometry}
          material={materials.silverh2}
          position={[-0.024, 0.802, -0.703]}
          rotation={[-2.541, 1.259, -1.577]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215037'].geometry}
          material={materials.silverh2}
          position={[0.01, 0.719, -0.581]}
          rotation={[-2.541, 1.259, -1.577]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215036'].geometry}
          material={materials.silverh2}
          position={[-0.292, 0.731, 0.332]}
          rotation={[2.538, 0.097, -0.128]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215035'].geometry}
          material={materials.silverh2}
          position={[-0.107, 0.755, -0.635]}
          rotation={[2.321, 1.063, -0.191]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215034'].geometry}
          material={materials.silverh2}
          position={[-0.27, 0.71, 0.429]}
          rotation={[2.568, 0.226, -0.316]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215033'].geometry}
          material={materials.silverh2}
          position={[-0.241, 0.681, 0.532]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215032'].geometry}
          material={materials.silverh2}
          position={[-0.208, 0.842, 0.042]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215031'].geometry}
          material={materials.silverh2}
          position={[0.081, 0.899, 0.252]}
          rotation={[-2.052, -0.478, 2.214]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215030'].geometry}
          material={materials.silverh2}
          position={[-0.133, 0.924, -0.789]}
          rotation={[2.571, 1.111, 0.314]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215029'].geometry}
          material={materials.silverh2}
          position={[0.154, 0.924, -0.788]}
          rotation={[-0.564, 1.106, 0.307]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215028'].geometry}
          material={materials.silverh2}
          position={[0.127, 0.755, -0.634]}
          rotation={[-0.812, 1.059, -0.201]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215027'].geometry}
          material={materials.silverh2}
          position={[-0.067, 0.899, 0.251]}
          rotation={[1.093, -0.481, 2.22]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215026'].geometry}
          material={materials.silverh2}
          position={[-0.085, 0.967, 0.131]}
          rotation={[0.641, -0.36, 2.022]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215025'].geometry}
          material={materials.silverh2}
          position={[0.044, 0.802, -0.703]}
          rotation={[0.59, 1.254, -1.565]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215024'].geometry}
          material={materials.silverh2}
          position={[0.223, 0.842, 0.043]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215023'].geometry}
          material={materials.silverh2}
          position={[0.305, 0.731, 0.333]}
          rotation={[-0.603, 0.091, -0.132]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215022'].geometry}
          material={materials.silverh2}
          position={[0.282, 0.71, 0.431]}
          rotation={[-0.573, 0.221, -0.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215021'].geometry}
          material={materials.silverh2}
          position={[0.253, 0.681, 0.534]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215020'].geometry}
          material={materials.silverh2}
          position={[0.173, 0.507, -0.634]}
          rotation={[-0.498, 0.085, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215019'].geometry}
          material={materials.silverh2}
          position={[0.172, 0.519, -0.528]}
          rotation={[-0.417, -0.171, 0.228]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215018'].geometry}
          material={materials.silverh2}
          position={[0.185, 0.395, -0.508]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215017'].geometry}
          material={materials.silverh2}
          position={[0.157, 0.35, -0.702]}
          rotation={[-0.372, -0.342, 0.273]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215016'].geometry}
          material={materials.silverh2}
          position={[-0.159, 0.353, -0.32]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215015'].geometry}
          material={materials.silverh2}
          position={[0.169, 0.416, -0.389]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215014'].geometry}
          material={materials.silverh2}
          position={[-0.155, 0.425, -0.291]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215013'].geometry}
          material={materials.silverh2}
          position={[-0.154, 0.422, -0.369]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215012'].geometry}
          material={materials.silverh2}
          position={[0.175, 0.437, -0.332]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215011'].geometry}
          material={materials.silverh2}
          position={[0.137, 0.316, -0.195]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215010'].geometry}
          material={materials.silverh2}
          position={[0.179, 0.425, -0.294]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215009'].geometry}
          material={materials.silverh2}
          position={[0.16, 0.329, -0.261]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215008'].geometry}
          material={materials.silverh2}
          position={[-0.154, 0.466, -0.35]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215007'].geometry}
          material={materials.silverh2}
          position={[-0.119, 0.465, 0.597]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215006'].geometry}
          material={materials.silverh2}
          position={[-0.119, 0.37, 0.636]}
          rotation={[2.532, 0.003, 0.002]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215005'].geometry}
          material={materials.silverh2}
          position={[0.13, 0.37, 0.637]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215004'].geometry}
          material={materials.silverh2}
          position={[0.131, 0.465, 0.597]}
          rotation={[-0.609, -0.003, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215003'].geometry}
          material={materials.silverh2}
          position={[-0.179, 0.943, 0.536]}
          rotation={[-2.591, -0.475, 1.879]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215002'].geometry}
          material={materials.silverh2}
          position={[-0.173, 0.929, 0.569]}
          rotation={[-2.591, -0.475, 1.879]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215001'].geometry}
          material={materials.silverh2}
          position={[0.191, 0.943, 0.538]}
          rotation={[0.552, -0.48, 1.883]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215'].geometry}
          material={materials.silverh2}
          position={[0.184, 0.929, 0.57]}
          rotation={[0.552, -0.48, 1.883]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#214001'].geometry}
          material={materials.silverh2}
          position={[0.113, 0.724, -0.285]}
          rotation={[-0.726, 0.408, 0.034]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#214'].geometry}
          material={materials.silverh2}
          position={[-0.096, 0.724, -0.286]}
          rotation={[2.414, 0.412, 0.038]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#213001'].geometry}
          material={materials.carbonh2r}
          position={[0.15, 0.767, 0.64]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#213'].geometry}
          material={materials.carbonh2r}
          position={[-0.139, 0.767, 0.639]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211004'].geometry}
          material={materials.silverh2}
          position={[0.039, 1.012, -0.077]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211003'].geometry}
          material={materials.silverh2}
          position={[0.068, 1.011, -0.006]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211002'].geometry}
          material={materials.silverh2}
          position={[0.008, 1.01, 0.039]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211001'].geometry}
          material={materials.silverh2}
          position={[-0.052, 1.011, -0.006]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211'].geometry}
          material={materials.silverh2}
          position={[-0.023, 1.012, -0.077]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557472005'].geometry}
          material={materials.silverh2}
          position={[-0.132, 0.931, -0.739]}
          rotation={[-1.246, 0.476, 1.562]}
          scale={-0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557472004'].geometry}
          material={materials.silverh2}
          position={[-0.137, 0.912, -0.708]}
          rotation={[-1.246, 0.476, 1.562]}
          scale={-0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557472003'].geometry}
          material={materials.silverh2}
          position={[-0.135, 0.908, -0.685]}
          rotation={[-1.246, 0.476, 1.562]}
          scale={-0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557472002'].geometry}
          material={materials.silverh2}
          position={[-0.128, 0.932, -0.715]}
          rotation={[-1.246, 0.476, 1.562]}
          scale={-0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557472001'].geometry}
          material={materials.silverh2}
          position={[-0.133, 0.922, -0.718]}
          rotation={[-1.246, 0.476, 1.562]}
          scale={-0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557472'].geometry}
          material={materials.silverh2}
          position={[-0.128, 0.923, -0.687]}
          rotation={[-1.246, 0.476, 1.562]}
          scale={-0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557463005'].geometry}
          material={materials.silverh2}
          position={[0.149, 0.913, -0.662]}
          rotation={[1.829, 0.461, -1.549]}
          scale={0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557463004'].geometry}
          material={materials.silverh2}
          position={[0.154, 0.914, -0.698]}
          rotation={[1.829, 0.461, -1.549]}
          scale={0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557463003'].geometry}
          material={materials.silverh2}
          position={[0.153, 0.923, -0.72]}
          rotation={[1.829, 0.461, -1.549]}
          scale={0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557463002'].geometry}
          material={materials.silverh2}
          position={[0.146, 0.927, -0.682]}
          rotation={[1.829, 0.461, -1.549]}
          scale={0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557463001'].geometry}
          material={materials.silverh2}
          position={[0.151, 0.916, -0.685]}
          rotation={[1.829, 0.461, -1.549]}
          scale={0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557463'].geometry}
          material={materials.silverh2}
          position={[0.146, 0.934, -0.71]}
          rotation={[1.829, 0.461, -1.549]}
          scale={0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557454'].geometry}
          material={materials.h2brckdisc}
          position={[-0.075, 0.29, 0.62]}
          rotation={[3.002, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557445'].geometry}
          material={materials.engineblackh2}
          position={[-0.072, 0.289, 0.618]}
          rotation={[3.002, 0.003, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557436'].geometry}
          material={materials.h2brckdisc}
          position={[0.087, 0.29, 0.62]}
          rotation={[-0.14, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557427'].geometry}
          material={materials.engineblackh2}
          position={[0.083, 0.289, 0.618]}
          rotation={[-0.14, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557418'].geometry}
          material={materials.carbonh2r}
          position={[0.006, 0.854, 0.598]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557409009'].geometry}
          material={materials.silverh2}
          position={[-0.11, 0.941, 0.284]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557409008'].geometry}
          material={materials.grayh2r2}
          position={[0.12, 0.94, 0.301]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557409007'].geometry}
          material={materials.grayh2r2}
          position={[0.101, 0.946, 0.303]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557409006'].geometry}
          material={materials.atomh2r}
          position={[0.12, 0.933, 0.283]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557409005'].geometry}
          material={materials.grayh2r2}
          position={[0.009, 0.938, 0.277]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[-0.111, 0.936, 0.286]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557409004_1'].geometry}
            material={materials.grayh2r2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557409004_2'].geometry}
            material={materials['[Color A05]']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557409003'].geometry}
          material={materials.atomh2r}
          position={[0.056, 0.907, 0.269]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557409002'].geometry}
          material={materials.grayh2r2}
          position={[0.009, 0.91, 0.273]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557409001'].geometry}
          material={materials.silverh2}
          position={[0.101, 0.936, 0.288]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557409'].geometry}
          material={materials.silverh2}
          position={[-0.082, 0.936, 0.287]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557400'].geometry}
          material={materials['black plastic h2r']}
          position={[0.01, 0.989, -0.895]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557391001'].geometry}
          material={materials.brakelightredh2r}
          position={[0.074, 0.965, -0.857]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557391'].geometry}
          material={materials.brakelightredh2r}
          position={[-0.053, 0.965, -0.857]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373016'].geometry}
          material={materials.engineblackh2}
          position={[0.008, 0.535, -0.295]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373015'].geometry}
          material={materials.enginegray}
          position={[0.008, 0.278, -0.279]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373014'].geometry}
          material={materials.enginegray}
          position={[0.008, 0.261, -0.448]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373013'].geometry}
          material={materials.enginegray}
          position={[0.008, 0.513, -0.315]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373012'].geometry}
          material={materials.engineblackh2}
          position={[0.009, 0.261, -0.448]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373011'].geometry}
          material={materials.chargerh2r}
          position={[0.009, 0.4, -0.336]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373010'].geometry}
          material={materials.enginegray}
          position={[0.008, 0.33, -0.347]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373009'].geometry}
          material={materials.engineblackh2}
          position={[0.008, 0.411, -0.337]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373008'].geometry}
          material={materials.enginegray}
          position={[0.008, 0.481, -0.323]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373007'].geometry}
          material={materials.enginegray}
          position={[0.008, 0.245, -0.365]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373006'].geometry}
          material={materials.engineblackh2}
          position={[-0.032, 0.27, -0.362]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373005'].geometry}
          material={materials.engineblackh2}
          position={[0.009, 0.359, -0.408]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373004'].geometry}
          material={materials.enginegray}
          position={[0.008, 0.536, -0.308]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373003'].geometry}
          material={materials.engineblackh2}
          position={[0.008, 0.275, -0.4]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373002'].geometry}
          material={materials.silverh2}
          position={[0.007, 0.415, -0.416]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373001'].geometry}
          material={materials.engineblackh2}
          position={[0.049, 0.27, -0.362]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557373'].geometry}
          material={materials.enginegray}
          position={[0.008, 0.272, -0.358]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557364001'].geometry}
          material={materials.engineblackh2}
          position={[-0.11, 0.684, -0.455]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557364'].geometry}
          material={materials.atomh2r}
          position={[-0.118, 0.672, -0.51]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557355003'].geometry}
          material={materials.silverh2}
          position={[0.036, 0.318, -0.408]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557355002'].geometry}
          material={materials.silverh2}
          position={[-0.017, 0.318, -0.408]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557355001'].geometry}
          material={materials.silverh2}
          position={[0.035, 0.318, -0.408]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557355'].geometry}
          material={materials.silverh2}
          position={[-0.018, 0.318, -0.408]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557346001'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.101, 0.866, -0.639]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557346'].geometry}
          material={materials['black plastic h2r']}
          position={[0.12, 0.866, -0.638]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557337003'].geometry}
          material={materials.blackglossh2r}
          position={[0.252, 0.767, 0.355]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557337002'].geometry}
          material={materials.blackglossh2r}
          position={[0.007, 0.881, 0.054]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557337001'].geometry}
          material={materials.blackglossh2r}
          position={[-0.121, 0.881, -0.646]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557337'].geometry}
          material={materials.blackglossh2r}
          position={[0.141, 0.881, -0.645]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557328'].geometry}
          material={materials.carbonh2r}
          position={[0.22, 0.765, 0.285]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[0.01, 0.939, -0.719]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557319_1'].geometry}
            material={materials.carbonh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557319_2'].geometry}
            material={materials['black plastic h2r']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557310'].geometry}
          material={materials.blackglossh2r}
          position={[0.109, 0.975, -0.677]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557274'].geometry}
          material={materials.atomh2r}
          position={[0.161, 0.365, -0.829]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557265002'].geometry}
          material={materials['black plastic h2r']}
          position={[0.133, 0.366, -0.829]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557265001'].geometry}
          material={materials.enginegray}
          position={[0.126, 0.366, -0.829]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[0.149, 0.365, -0.828]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557265_1'].geometry}
            material={materials.silverh2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557265_2'].geometry}
            material={materials['black plastic h2r']}
          />
        </group>
        <group position={[0.01, 0.365, -0.829]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557256_1'].geometry}
            material={materials.treadh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557256_2'].geometry}
            material={materials.tireh2r}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557247005'].geometry}
          material={materials['black plastic h2r']}
          position={[0.034, 0.409, -0.902]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557247004'].geometry}
          material={materials['black plastic h2r']}
          position={[0.033, 0.406, -0.754]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557247003'].geometry}
          material={materials['black plastic h2r']}
          position={[0.033, 0.45, -0.827]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557247002'].geometry}
          material={materials['black plastic h2r']}
          position={[0.033, 0.321, -0.756]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557247001'].geometry}
          material={materials.h2brckdisc}
          position={[0.033, 0.365, -0.829]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557247'].geometry}
          material={materials['black plastic h2r']}
          position={[0.034, 0.324, -0.903]}
          rotation={[-3.122, 0.003, 0]}
          scale={-1.05}
        />
        <group position={[0.01, 0.366, -0.83]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557238_1'].geometry}
            material={materials.velgh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557238_2'].geometry}
            material={materials.greenstripeh2r}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557229002'].geometry}
          material={materials.velgh2r}
          position={[0.01, 0.365, -0.829]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[-0.02, 0.366, -0.83]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557229001_1'].geometry}
            material={materials.velgh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557229001_2'].geometry}
            material={materials.silverh2}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557229'].geometry}
          material={materials.velgh2r}
          position={[0.035, 0.367, -0.832]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557220004'].geometry}
          material={materials.silverh2}
          position={[-0.028, 0.321, -0.796]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557220003'].geometry}
          material={materials.silverh2}
          position={[-0.028, 0.384, -0.777]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557220002'].geometry}
          material={materials.silverh2}
          position={[-0.028, 0.32, -0.863]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557220001'].geometry}
          material={materials.silverh2}
          position={[-0.028, 0.422, -0.83]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557220'].geometry}
          material={materials.silverh2}
          position={[-0.028, 0.383, -0.883]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557202001'].geometry}
          material={materials.exhausth2r}
          position={[-0.172, 0.372, -0.551]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557202'].geometry}
          material={materials.mufflerh2r}
          position={[-0.138, 0.332, -0.486]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557193007'].geometry}
          material={materials.enginegray}
          position={[-0.02, 0.228, -0.238]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557193006'].geometry}
          material={materials.enginegray}
          position={[-0.008, 0.246, 0.056]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557193005'].geometry}
          material={materials.enginegray}
          position={[-0.053, 0.265, -0.311]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557193004'].geometry}
          material={materials.enginegray}
          position={[-0.037, 0.249, -0.273]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557193003'].geometry}
          material={materials.enginegray}
          position={[-0.01, 0.24, 0.012]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557193002'].geometry}
          material={materials.enginegray}
          position={[-0.006, 0.245, 0.101]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557193001'].geometry}
          material={materials.enginegray}
          position={[-0.037, 0.248, -0.272]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557193'].geometry}
          material={materials.filterh2r}
          position={[-0.008, 0.247, 0.056]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557184003'].geometry}
          material={materials.exhausth2r}
          position={[0.036, 0.377, 0.153]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557184002'].geometry}
          material={materials.exhausth2r}
          position={[-0.085, 0.376, 0.156]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557184001'].geometry}
          material={materials.exhausth2r}
          position={[0.077, 0.339, 0.166]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557184'].geometry}
          material={materials.exhausth2r}
          position={[-0.035, 0.344, 0.165]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557175002'].geometry}
          material={materials.exhausth2r}
          position={[0.007, 0.194, 0.02]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557175001'].geometry}
          material={materials.exhausth2r}
          position={[-0.043, 0.194, 0.02]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557175'].geometry}
          material={materials.exhausth2r}
          position={[-0.004, 0.197, -0.102]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166015'].geometry}
          material={materials.enginegray}
          position={[-0.075, 0.195, 0.002]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166014'].geometry}
          material={materials.enginegray}
          position={[-0.06, 0.162, 0.089]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166013'].geometry}
          material={materials.enginegray}
          position={[-0.086, 0.2, 0.091]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166012'].geometry}
          material={materials.enginegray}
          position={[-0.083, 0.196, 0.046]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166011'].geometry}
          material={materials.enginegray}
          position={[-0.059, 0.178, 0.001]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166010'].geometry}
          material={materials.enginegray}
          position={[-0.063, 0.17, 0.045]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166009'].geometry}
          material={materials.enginegray}
          position={[0.048, 0.169, 0.068]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166008'].geometry}
          material={materials.enginegray}
          position={[0.002, 0.165, -0.216]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166007'].geometry}
          material={materials.enginegray}
          position={[0, 0.17, -0.126]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166006'].geometry}
          material={materials.enginegray}
          position={[0.001, 0.165, -0.172]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166005'].geometry}
          material={materials.enginegray}
          position={[0.044, 0.17, 0.024]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166004'].geometry}
          material={materials.enginegray}
          position={[0.046, 0.167, 0.114]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166003'].geometry}
          material={materials.filterh2r}
          position={[0.002, 0.165, -0.172]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166002'].geometry}
          material={materials.filterh2r}
          position={[0.049, 0.169, 0.069]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166001'].geometry}
          material={materials.filterh2r}
          position={[-0.083, 0.195, 0.046]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557166'].geometry}
          material={materials.filterh2r}
          position={[-0.064, 0.17, 0.046]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557157'].geometry}
          material={materials.exhausth2r}
          position={[-0.013, 0.201, -0.223]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557148004'].geometry}
          material={materials['black plastic h2r']}
          position={[0.016, 0.941, 0.472]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557148003'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.018, 0.97, 0.49]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557148002'].geometry}
          material={materials['black plastic h2r']}
          position={[0.069, 0.916, 0.454]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557148001'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.018, 0.913, 0.452]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557148'].geometry}
          material={materials['black plastic h2r']}
          position={[0.069, 0.968, 0.489]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[0.02, 0.951, 0.456]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557139_1'].geometry}
            material={materials.logoh2r2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557139_2'].geometry}
            material={materials.atomh2r}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557121'].geometry}
          material={materials.carbonh2r}
          position={[0.066, 0.551, -0.606]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557112'].geometry}
          material={materials['black plastic h2r']}
          position={[0.12, 0.458, -0.543]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557103'].geometry}
          material={materials['black plastic h2r']}
          position={[0.146, 0.33, -0.727]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557094'].geometry}
          material={materials['black plastic h2r']}
          position={[0.082, 0.471, -0.838]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557085'].geometry}
          material={materials.silverh2}
          position={[0.001, 1.009, -0.021]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557076'].geometry}
          material={materials.blackglossh2r}
          position={[0.008, 1.006, -0.023]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557067'].geometry}
          material={materials['black plastic h2r']}
          position={[0.148, 0.246, -0.377]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058027'].geometry}
          material={materials['glassbening h2r']}
          position={[-0.154, 0.559, -0.3]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058026'].geometry}
          material={materials.atomh2r}
          position={[-0.154, 0.575, -0.3]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058025'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.246, 0.377, -0.395]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058024'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.172, 0.377, -0.391]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058023'].geometry}
          material={materials['black plastic h2r']}
          position={[0.249, 0.386, -0.39]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058022'].geometry}
          material={materials['black plastic h2r']}
          position={[0.263, 0.377, -0.393]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058021'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.231, 0.386, -0.391]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058020'].geometry}
          material={materials['black plastic h2r']}
          position={[0.263, 0.377, -0.393]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058019'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.174, 0.375, -0.39]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058018'].geometry}
          material={materials['black plastic h2r']}
          position={[0.192, 0.375, -0.389]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058017'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.142, 0.38, -0.42]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058016'].geometry}
          material={materials.grayh2r2}
          position={[0.173, 0.463, -0.399]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058015'].geometry}
          material={materials['black plastic h2r']}
          position={[0.218, 0.308, -0.279]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058014'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.174, 0.333, -0.33]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058013'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.142, 0.439, -0.398]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058012'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.141, 0.517, -0.349]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058011'].geometry}
          material={materials.grayh2r2}
          position={[-0.154, 0.467, -0.395]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058010'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.149, 0.399, -0.333]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058009'].geometry}
          material={materials['black plastic h2r']}
          position={[0.129, 0.309, -0.176]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058008'].geometry}
          material={materials['black plastic h2r']}
          position={[0.167, 0.291, -0.392]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058007'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.122, 0.511, -0.291]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058006'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.143, 0.497, -0.329]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058005'].geometry}
          material={materials['black plastic h2r']}
          position={[0.162, 0.378, -0.321]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058004'].geometry}
          material={materials['black plastic h2r']}
          position={[0.147, 0.3, -0.157]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058003'].geometry}
          material={materials['black plastic h2r']}
          position={[0.16, 0.296, -0.27]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058002'].geometry}
          material={materials['black plastic h2r']}
          position={[0.162, 0.295, -0.293]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058001'].geometry}
          material={materials['black plastic h2r']}
          position={[0.18, 0.345, -0.369]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557058'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.17, 0.377, -0.391]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557049005'].geometry}
          material={materials.greenstripeh2r}
          position={[0.053, 0.999, -0.805]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557049004'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.032, 0.999, -0.806]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557049003'].geometry}
          material={materials.greenstripeh2r}
          position={[0.154, 0.667, 0.68]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557049002'].geometry}
          material={materials.greenstripeh2r}
          position={[0.109, 0.899, 0.632]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557049001'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.143, 0.667, 0.679]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557049'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.098, 0.899, 0.631]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040013'].geometry}
          material={materials.enginegray}
          position={[0.105, 0.636, -0.146]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040012'].geometry}
          material={materials.chargerh2r}
          position={[0.096, 0.596, -0.148]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040011'].geometry}
          material={materials.chargerh2r}
          position={[0.096, 0.616, -0.112]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040010'].geometry}
          material={materials.chargerh2r}
          position={[0.096, 0.658, -0.111]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040009'].geometry}
          material={materials.chargerh2r}
          position={[0.096, 0.679, -0.146]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040008'].geometry}
          material={materials.chargerh2r}
          position={[0.096, 0.659, -0.183]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040007'].geometry}
          material={materials.chargerh2r}
          position={[0.096, 0.618, -0.184]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040006'].geometry}
          material={materials.chargerh2r}
          position={[0.098, 0.599, -0.17]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040005'].geometry}
          material={materials.chargerh2r}
          position={[0.097, 0.599, -0.126]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040004'].geometry}
          material={materials.chargerh2r}
          position={[0.097, 0.637, -0.102]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040003'].geometry}
          material={materials.chargerh2r}
          position={[0.097, 0.676, -0.124]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040002'].geometry}
          material={materials.chargerh2r}
          position={[0.098, 0.677, -0.169]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040001'].geometry}
          material={materials.chargerh2r}
          position={[0.098, 0.639, -0.192]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557040'].geometry}
          material={materials.chargerh2r}
          position={[0.067, 0.671, -0.158]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031013'].geometry}
          material={materials.engineblackh2}
          position={[0.079, 0.505, 0.247]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031012'].geometry}
          material={materials.engineblackh2}
          position={[0.079, 0.575, 0.262]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031011'].geometry}
          material={materials.engineblackh2}
          position={[0.147, 0.501, 0.269]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031010'].geometry}
          material={materials.engineblackh2}
          position={[0.146, 0.57, 0.284]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031009'].geometry}
          material={materials.engineblackh2}
          position={[0.111, 0.537, 0.27]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031008'].geometry}
          material={materials.engineblackh2}
          position={[0.147, 0.527, 0.284]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031007'].geometry}
          material={materials.engineblackh2}
          position={[0.073, 0.545, 0.263]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031006'].geometry}
          material={materials.engineblackh2}
          position={[0.112, 0.537, 0.268]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031005'].geometry}
          material={materials.engineblackh2}
          position={[0.133, 0.503, 0.272]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031004'].geometry}
          material={materials.engineblackh2}
          position={[0.088, 0.57, 0.272]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031003'].geometry}
          material={materials.engineblackh2}
          position={[0.105, 0.498, 0.261]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031002'].geometry}
          material={materials.engineblackh2}
          position={[0.141, 0.557, 0.288]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031001'].geometry}
          material={materials.engineblackh2}
          position={[0.116, 0.575, 0.283]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557031'].geometry}
          material={materials.engineblackh2}
          position={[0.08, 0.515, 0.258]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557022002'].geometry}
          material={materials.filterh2r}
          position={[0.011, 0.489, 0.283]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557022001'].geometry}
          material={materials.enginegray}
          position={[-0.183, 0.476, 0.32]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557022'].geometry}
          material={materials.enginegray}
          position={[0.196, 0.476, 0.321]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013099'].geometry}
          material={materials.enginegray}
          position={[-0.131, 0.563, 0.057]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013098'].geometry}
          material={materials.enginegray}
          position={[0.007, 0.398, 0.096]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013097'].geometry}
          material={materials.enginegray}
          position={[-0.132, 0.535, 0.115]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013096'].geometry}
          material={materials.enginegray}
          position={[-0.09, 0.619, 0.01]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013095'].geometry}
          material={materials.enginegray}
          position={[-0.089, 0.64, -0.093]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013094'].geometry}
          material={materials.enginegray}
          position={[-0.084, 0.643, -0.053]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013093'].geometry}
          material={materials.enginegray}
          position={[-0.114, 0.63, -0.011]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013092'].geometry}
          material={materials.enginegray}
          position={[-0.091, 0.662, -0.074]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013091'].geometry}
          material={materials.enginegray}
          position={[-0.075, 0.618, -0.126]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[-0.12, 0.629, -0.161]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557013090_1'].geometry}
            material={materials.enginegray}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557013090_2'].geometry}
            material={materials.logoh2r2}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013089'].geometry}
          material={materials.engineblackh2}
          position={[-0.013, 0.271, 0.077]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013088'].geometry}
          material={materials.engineblackh2}
          position={[0.005, 0.301, 0.081]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013087'].geometry}
          material={materials.engineblackh2}
          position={[0.128, 0.456, -0.047]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013086'].geometry}
          material={materials.engineblackh2}
          position={[0.159, 0.279, 0.08]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013085'].geometry}
          material={materials.enginegray}
          position={[-0.131, 0.573, -0.171]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013084'].geometry}
          material={materials.engineblackh2}
          position={[0.039, 0.751, 0.112]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013083'].geometry}
          material={materials.engineblackh2}
          position={[0.075, 0.54, -0.042]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013082'].geometry}
          material={materials.enginegray}
          position={[-0.126, 0.57, -0.213]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013081'].geometry}
          material={materials.engineblackh2}
          position={[-0.07, 0.423, -0.259]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013080'].geometry}
          material={materials.engineblackh2}
          position={[0.083, 0.423, -0.258]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013079'].geometry}
          material={materials.engineblackh2}
          position={[-0.037, 0.291, 0.037]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013078'].geometry}
          material={materials.engineblackh2}
          position={[-0.182, 0.423, 0.013]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013077'].geometry}
          material={materials.engineblackh2}
          position={[0.197, 0.404, 0.226]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013076'].geometry}
          material={materials.engineblackh2}
          position={[0.115, 0.55, -0.104]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013075'].geometry}
          material={materials.engineblackh2}
          position={[0.173, 0.283, -0.02]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013074'].geometry}
          material={materials.engineblackh2}
          position={[0.204, 0.463, 0.047]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013073'].geometry}
          material={materials.engineblackh2}
          position={[0.153, 0.318, 0.031]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013072'].geometry}
          material={materials.engineblackh2}
          position={[-0.137, 0.717, 0.021]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013071'].geometry}
          material={materials.engineblackh2}
          position={[0.106, 0.289, 0.088]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013070'].geometry}
          material={materials.engineblackh2}
          position={[0.118, 0.528, -0.046]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013069'].geometry}
          material={materials.engineblackh2}
          position={[0.136, 0.393, -0.087]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013068'].geometry}
          material={materials.engineblackh2}
          position={[-0.112, 0.735, 0.035]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013067'].geometry}
          material={materials.engineblackh2}
          position={[0.161, 0.344, -0.027]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013066'].geometry}
          material={materials.engineblackh2}
          position={[0.161, 0.413, -0.062]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013065'].geometry}
          material={materials.engineblackh2}
          position={[0.161, 0.477, -0.022]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013064'].geometry}
          material={materials.engineblackh2}
          position={[0.144, 0.439, -0.18]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013063'].geometry}
          material={materials.engineblackh2}
          position={[0.205, 0.46, 0.078]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013062'].geometry}
          material={materials.engineblackh2}
          position={[0.161, 0.351, 0.062]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[0.002, 0.256, -0.25]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557013061_1'].geometry}
            material={materials.silverh2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557013061_2'].geometry}
            material={materials.enginegray}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013060'].geometry}
          material={materials.enginegray}
          position={[0.018, 0.27, -0.266]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013059'].geometry}
          material={materials.engineblackh2}
          position={[0.081, 0.547, -0.115]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013058'].geometry}
          material={materials.engineblackh2}
          position={[-0.083, 0.723, -0.041]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013057'].geometry}
          material={materials.engineblackh2}
          position={[0.132, 0.28, -0.224]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013056'].geometry}
          material={materials.engineblackh2}
          position={[0.146, 0.724, 0.126]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013055'].geometry}
          material={materials.engineblackh2}
          position={[0.157, 0.557, -0.029]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013054'].geometry}
          material={materials.engineblackh2}
          position={[0.132, 0.731, 0.008]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013053'].geometry}
          material={materials.engineblackh2}
          position={[0.141, 0.76, -0.007]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013052'].geometry}
          material={materials.engineblackh2}
          position={[0.138, 0.752, 0.055]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013051'].geometry}
          material={materials.engineblackh2}
          position={[0.064, 0.552, -0.184]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013050'].geometry}
          material={materials.silverh2}
          position={[0.095, 0.54, -0.117]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013049'].geometry}
          material={materials.silverh2}
          position={[0.151, 0.263, -0.26]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013048'].geometry}
          material={materials.engineblackh2}
          position={[-0.074, 0.694, -0.022]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013047'].geometry}
          material={materials.engineblackh2}
          position={[0.003, 0.422, -0.257]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013046'].geometry}
          material={materials.silverh2}
          position={[-0.114, 0.612, -0.018]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013045'].geometry}
          material={materials.engineblackh2}
          position={[-0.068, 0.683, -0.05]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013044'].geometry}
          material={materials.engineblackh2}
          position={[-0.083, 0.735, -0.057]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013043'].geometry}
          material={materials.engineblackh2}
          position={[0.143, 0.338, -0.155]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013042'].geometry}
          material={materials.engineblackh2}
          position={[-0.076, 0.748, -0.024]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013041'].geometry}
          material={materials.engineblackh2}
          position={[-0.025, 0.764, 0.131]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013040'].geometry}
          material={materials.engineblackh2}
          position={[0.075, 0.521, -0.137]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013039'].geometry}
          material={materials.enginegray}
          position={[-0.124, 0.297, -0.225]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013038'].geometry}
          material={materials.engineblackh2}
          position={[0.167, 0.532, -0.098]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013037'].geometry}
          material={materials.engineblackh2}
          position={[-0.1, 0.644, -0.019]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013036'].geometry}
          material={materials.engineblackh2}
          position={[-0.165, 0.617, 0.035]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013035'].geometry}
          material={materials.engineblackh2}
          position={[-0.083, 0.705, -0.016]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013034'].geometry}
          material={materials.engineblackh2}
          position={[0.061, 0.764, 0.131]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013033'].geometry}
          material={materials.engineblackh2}
          position={[0.11, 0.7, -0.032]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013032'].geometry}
          material={materials.engineblackh2}
          position={[0.116, 0.728, -0.044]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013031'].geometry}
          material={materials.engineblackh2}
          position={[0.13, 0.71, -0.021]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013030'].geometry}
          material={materials.engineblackh2}
          position={[0.114, 0.723, -0.051]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013029'].geometry}
          material={materials.engineblackh2}
          position={[0.118, 0.752, 0.055]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013028'].geometry}
          material={materials.engineblackh2}
          position={[0.139, 0.425, -0.055]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013027'].geometry}
          material={materials.engineblackh2}
          position={[0.139, 0.666, 0.04]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013026'].geometry}
          material={materials.engineblackh2}
          position={[0.131, 0.334, -0.185]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013025'].geometry}
          material={materials.silverh2}
          position={[0.142, 0.4, -0.09]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013024'].geometry}
          material={materials.silverh2}
          position={[0.095, 0.551, -0.152]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013023'].geometry}
          material={materials.silverh2}
          position={[0.195, 0.393, 0.204]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013022'].geometry}
          material={materials.silverh2}
          position={[0.2, 0.422, 0.237]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013021'].geometry}
          material={materials.engineblackh2}
          position={[0.186, 0.341, 0.138]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013020'].geometry}
          material={materials.silverh2}
          position={[0.173, 0.302, -0.036]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013019'].geometry}
          material={materials.silverh2}
          position={[0.176, 0.276, 0.001]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[0.009, 0.765, -0.032]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557013018_1'].geometry}
            material={materials.engineblackh2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557013018_2'].geometry}
            material={materials.enginegray}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013017'].geometry}
          material={materials.enginegray}
          position={[0.118, 0.25, -0.003]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013016'].geometry}
          material={materials.enginegray}
          position={[-0.057, 0.249, -0.002]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[-0.058, 0.422, -0.056]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557013015_1'].geometry}
            material={materials.engineblackh2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557013015_2'].geometry}
            material={materials.enginegray}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013014'].geometry}
          material={materials.enginegray}
          position={[-0.125, 0.283, -0.161]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013013'].geometry}
          material={materials.engineblackh2}
          position={[0.173, 0.352, -0.07]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013012'].geometry}
          material={materials.engineblackh2}
          position={[0.152, 0.484, -0.113]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013011'].geometry}
          material={materials.engineblackh2}
          position={[0.161, 0.332, -0.088]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013010'].geometry}
          material={materials.silverh2}
          position={[0.166, 0.513, -0.082]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013009'].geometry}
          material={materials.engineblackh2}
          position={[0.066, 0.708, -0.179]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013008'].geometry}
          material={materials.engineblackh2}
          position={[0.039, 0.287, 0.053]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013007'].geometry}
          material={materials.engineblackh2}
          position={[0.146, 0.317, -0.156]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013006'].geometry}
          material={materials.engineblackh2}
          position={[0.095, 0.528, -0.129]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013005'].geometry}
          material={materials.engineblackh2}
          position={[0.15, 0.532, -0.138]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013004'].geometry}
          material={materials.engineblackh2}
          position={[-0.192, 0.539, -0.035]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013003'].geometry}
          material={materials.engineblackh2}
          position={[0.15, 0.731, 0.008]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013002'].geometry}
          material={materials.engineblackh2}
          position={[0.139, 0.344, -0.102]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013001'].geometry}
          material={materials.engineblackh2}
          position={[0.008, 0.391, -0.263]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013'].geometry}
          material={materials.engineblackh2}
          position={[0.166, 0.513, -0.079]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557004003'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.1, 0.952, 0.354]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557004002'].geometry}
          material={materials.greenstripeh2r}
          position={[0.113, 0.952, 0.355]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557004001'].geometry}
          material={materials.greenstripeh2r}
          position={[0.119, 0.945, 0.352]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557004'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.108, 0.945, 0.351]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995071'].geometry}
          material={materials.atomh2r}
          position={[-0.11, 0.303, 0.551]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995070'].geometry}
          material={materials.atomh2r}
          position={[-0.109, 0.267, 0.63]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995069'].geometry}
          material={materials.atomh2r}
          position={[0.121, 0.303, 0.552]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995068'].geometry}
          material={materials.atomh2r}
          position={[-0.106, 0.269, 0.539]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995067'].geometry}
          material={materials.atomh2r}
          position={[-0.106, 0.406, 0.616]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995066'].geometry}
          material={materials.atomh2r}
          position={[0.12, 0.267, 0.63]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995065'].geometry}
          material={materials.atomh2r}
          position={[0.118, 0.269, 0.539]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995064'].geometry}
          material={materials.atomh2r}
          position={[0.116, 0.406, 0.616]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995063'].geometry}
          material={materials.atomh2r}
          position={[0.118, 0.349, 0.572]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995062'].geometry}
          material={materials.atomh2r}
          position={[-0.107, 0.349, 0.571]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995061'].geometry}
          material={materials.atomh2r}
          position={[-0.086, 0.59, 0.447]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995060'].geometry}
          material={materials.atomh2r}
          position={[0.098, 0.59, 0.448]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995059'].geometry}
          material={materials.atomh2r}
          position={[0.153, 0.976, 0.423]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995058'].geometry}
          material={materials.atomh2r}
          position={[-0.162, 0.903, 0.415]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995057'].geometry}
          material={materials.atomh2r}
          position={[-0.216, 0.89, 0.313]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995056'].geometry}
          material={materials.atomh2r}
          position={[-0.119, 0.925, 0.292]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995055'].geometry}
          material={materials.atomh2r}
          position={[-0.138, 0.981, 0.411]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995054'].geometry}
          material={materials['glassbening h2r']}
          position={[-0.138, 0.958, 0.411]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995053'].geometry}
          material={materials.atomh2r}
          position={[0.241, 0.871, 0.405]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995052'].geometry}
          material={materials.atomh2r}
          position={[0.175, 0.903, 0.416]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995051'].geometry}
          material={materials.atomh2r}
          position={[-0.212, 0.885, 0.349]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995050'].geometry}
          material={materials.atomh2r}
          position={[0.219, 0.878, 0.324]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995049'].geometry}
          material={materials.atomh2r}
          position={[-0.287, 0.85, 0.389]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995048'].geometry}
          material={materials.atomh2r}
          position={[0.3, 0.85, 0.391]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995047'].geometry}
          material={materials.atomh2r}
          position={[-0.156, 0.948, 0.392]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995046'].geometry}
          material={materials.atomh2r}
          position={[-0.226, 0.889, 0.338]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995045'].geometry}
          material={materials.atomh2r}
          position={[-0.228, 0.871, 0.403]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995044'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.092, 0.943, 0.352]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995043'].geometry}
          material={materials.grayh2r2}
          position={[0.007, 0.95, 0.373]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[-0.117, 0.29, 0.619]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995042_1'].geometry}
            material={materials.atomh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995042_2'].geometry}
            material={materials.silverh2}
          />
        </group>
        <group position={[0.128, 0.29, 0.62]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995041_1'].geometry}
            material={materials.atomh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995041_2'].geometry}
            material={materials.silverh2}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995040'].geometry}
          material={materials.engineblackh2}
          position={[0.006, 0.289, 0.619]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995039'].geometry}
          material={materials.brmbh2r}
          position={[-0.098, 0.266, 0.459]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995038'].geometry}
          material={materials.brmbh2r}
          position={[-0.077, 0.328, 0.443]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995037'].geometry}
          material={materials.brmbh2r}
          position={[-0.095, 0.266, 0.489]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995036'].geometry}
          material={materials.atomh2r}
          position={[-0.098, 0.267, 0.433]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995035'].geometry}
          material={materials.atomh2r}
          position={[-0.098, 0.388, 0.46]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995034'].geometry}
          material={materials.brmbh2r}
          position={[0.107, 0.266, 0.489]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995033'].geometry}
          material={materials.brmbh2r}
          position={[-0.08, 0.414, 0.48]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995032'].geometry}
          material={materials.brmbh2r}
          position={[0.092, 0.414, 0.481]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995031'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.112, 0.911, 0.308]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995030'].geometry}
          material={materials.grayh2r2}
          position={[-0.204, 0.879, 0.394]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995029'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.183, 0.924, 0.382]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[-0.283, 0.846, 0.296]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995028_1'].geometry}
            material={materials['black plastic h2r']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995028_2'].geometry}
            material={materials.atomh2r}
          />
        </group>
        <group position={[0.297, 0.846, 0.297]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995027_1'].geometry}
            material={materials['black plastic h2r']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995027_2'].geometry}
            material={materials.atomh2r}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995026'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.178, 0.874, 0.306]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995025'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.208, 0.878, 0.411]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995024'].geometry}
          material={materials.brmbh2r}
          position={[-0.097, 0.372, 0.497]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[0.159, 0.942, 0.406]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995023_1'].geometry}
            material={materials['black plastic h2r']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556995023_2'].geometry}
            material={materials.silverh2}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995022'].geometry}
          material={materials['black plastic h2r']}
          position={[0.18, 0.904, 0.351]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995021'].geometry}
          material={materials['black plastic h2r']}
          position={[0.006, 0.937, 0.36]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995020'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.115, 0.903, 0.373]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995019'].geometry}
          material={materials.grayh2r2}
          position={[0.217, 0.879, 0.395]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995018'].geometry}
          material={materials.greenstripeh2r}
          position={[0.007, 0.939, 0.339]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995017'].geometry}
          material={materials['black plastic h2r']}
          position={[0.22, 0.878, 0.413]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995016'].geometry}
          material={materials.silverh2}
          position={[-0.147, 0.897, 0.361]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995015'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.167, 0.904, 0.35]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995014'].geometry}
          material={materials.silverh2}
          position={[0.16, 0.897, 0.362]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995013'].geometry}
          material={materials.atomh2r}
          position={[0.196, 0.924, 0.383]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995012'].geometry}
          material={materials['black plastic h2r']}
          position={[0.266, 0.862, 0.415]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995011'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.187, 0.886, 0.383]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995010'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.158, 0.879, 0.351]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995009'].geometry}
          material={materials.brmbh2r}
          position={[0.11, 0.266, 0.46]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995008'].geometry}
          material={materials.brmbh2r}
          position={[-0.074, 0.325, 0.466]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995007'].geometry}
          material={materials.atomh2r}
          position={[0.11, 0.388, 0.461]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995006'].geometry}
          material={materials.brmbh2r}
          position={[0.109, 0.372, 0.497]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995005'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.253, 0.862, 0.413]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995004'].geometry}
          material={materials.brmbh2r}
          position={[0.089, 0.328, 0.443]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995003'].geometry}
          material={materials.brmbh2r}
          position={[0.086, 0.325, 0.467]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995002'].geometry}
          material={materials.atomh2r}
          position={[0.11, 0.267, 0.433]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995001'].geometry}
          material={materials['black plastic h2r']}
          position={[0.2, 0.886, 0.384]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556995'].geometry}
          material={materials['black plastic h2r']}
          position={[0.171, 0.879, 0.352]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556986005'].geometry}
          material={materials.grillfh2r}
          position={[-0.151, 0.807, 0.189]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556986004'].geometry}
          material={materials.grillfh2r}
          position={[0.165, 0.807, 0.19]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556986003'].geometry}
          material={materials.blackglossh2r}
          position={[-0.154, 0.803, 0.183]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556986002'].geometry}
          material={materials.blackglossh2r}
          position={[-0.144, 0.808, 0.203]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556986001'].geometry}
          material={materials.blackglossh2r}
          position={[0.168, 0.803, 0.184]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556986'].geometry}
          material={materials.blackglossh2r}
          position={[0.158, 0.808, 0.204]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977024'].geometry}
          material={materials.greenstripeh2r}
          position={[0.208, 0.51, 0.124]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977023'].geometry}
          material={materials.greenstripeh2r}
          position={[0.007, 0.86, 0.366]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977022'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.138, 0.424, -0.289]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977021'].geometry}
          material={materials.greenstripeh2r}
          position={[0.166, 0.424, -0.288]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977020'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.097, 0.675, -0.277]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977019'].geometry}
          material={materials.greenstripeh2r}
          position={[0.112, 0.81, 0.26]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977018'].geometry}
          material={materials.greenstripeh2r}
          position={[0.172, 0.683, -0.056]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977017'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.188, 0.51, 0.122]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977016'].geometry}
          material={materials.greenstripeh2r}
          position={[0.147, 0.328, -0.257]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977015'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.138, 0.352, -0.316]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977014'].geometry}
          material={materials.greenstripeh2r}
          position={[0.113, 0.675, -0.276]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977013'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.157, 0.683, -0.057]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977012'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.056, 0.822, 0.309]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977011'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.092, 0.817, 0.266]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977010'].geometry}
          material={materials.greenstripeh2r}
          position={[0.089, 0.823, 0.28]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977009'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.096, 0.679, -0.297]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977008'].geometry}
          material={materials.greenstripeh2r}
          position={[0.113, 0.679, -0.297]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[0.154, 0.329, -0.23]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977007_1'].geometry}
            material={materials.greenstripeh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977007_2'].geometry}
            material={materials.engineblackh2}
          />
        </group>
        <group position={[-0.13, 0.754, -0.058]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977006_1'].geometry}
            material={materials.greenstripeh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977006_2'].geometry}
            material={materials.engineblackh2}
          />
        </group>
        <group position={[0.146, 0.754, -0.057]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977005_1'].geometry}
            material={materials.greenstripeh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977005_2'].geometry}
            material={materials.engineblackh2}
          />
        </group>
        <group position={[-0.147, 0.355, -0.287]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977004_1'].geometry}
            material={materials.greenstripeh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977004_2'].geometry}
            material={materials.engineblackh2}
          />
        </group>
        <group position={[-0.161, 0.422, -0.259]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977003_1'].geometry}
            material={materials.greenstripeh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977003_2'].geometry}
            material={materials.engineblackh2}
          />
        </group>
        <group position={[0.049, 0.512, -0.256]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977002_1'].geometry}
            material={materials.greenstripeh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977002_2'].geometry}
            material={materials.engineblackh2}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556977001'].geometry}
          material={materials.greenstripeh2r}
          position={[-0.028, 0.828, 0.338]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[0.001, 0.696, 0.156]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977_1'].geometry}
            material={materials.greenstripeh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556977_2'].geometry}
            material={materials.engineblackh2}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968011'].geometry}
          material={materials['black plastic h2r']}
          position={[0.065, 0.243, -0.919]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968010'].geometry}
          material={materials['black plastic h2r']}
          position={[0.048, 0.28, -0.841]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968009'].geometry}
          material={materials['black plastic h2r']}
          position={[0.042, 0.267, -0.889]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968008'].geometry}
          material={materials['black plastic h2r']}
          position={[0.041, 0.258, -0.796]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968007'].geometry}
          material={materials['black plastic h2r']}
          position={[0.065, 0.227, -0.902]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968006'].geometry}
          material={materials['black plastic h2r']}
          position={[0.054, 0.259, -0.795]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968005'].geometry}
          material={materials['black plastic h2r']}
          position={[0.061, 0.272, -0.922]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968004'].geometry}
          material={materials.engineblackh2}
          position={[0.05, 0.221, -0.883]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968003'].geometry}
          material={materials.engineblackh2}
          position={[0.048, 0.214, -0.811]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968002'].geometry}
          material={materials.engineblackh2}
          position={[0.033, 0.239, -0.845]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968001'].geometry}
          material={materials['black plastic h2r']}
          position={[0.054, 0.268, -0.889]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556968'].geometry}
          material={materials.atomh2r}
          position={[0.069, 0.402, -0.892]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556959'].geometry}
          material={materials.chainh2r}
          position={[0.125, 0.366, -0.757]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556950004'].geometry}
          material={materials.carbonh2r}
          position={[-0.214, 0.724, 0.225]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556950003'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.117, 0.646, -0.343]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556950002'].geometry}
          material={materials['black plastic h2r']}
          position={[-0.138, 0.766, -0.15]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556950001'].geometry}
          material={materials['black plastic h2r']}
          position={[0.153, 0.766, -0.151]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556950'].geometry}
          material={materials['black plastic h2r']}
          position={[0.134, 0.646, -0.342]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556941'].geometry}
          material={materials['glassbening h2r']}
          position={[0.01, 0.966, -0.869]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556932'].geometry}
          material={materials.brklighth2r}
          position={[0.01, 0.968, -0.853]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556923'].geometry}
          material={materials['black plastic h2r']}
          position={[0.01, 0.801, -0.646]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556914'].geometry}
          material={materials.blackglossh2r}
          position={[0.006, 0.481, 0.609]}
          rotation={[0.019, -0.003, 0]}
        />
        <group position={[0.006, 0.289, 0.62]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556905_1'].geometry}
            material={materials.treadh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556905_2'].geometry}
            material={materials.tireh2r}
          />
        </group>
        <group position={[0.006, 0.29, 0.62]} rotation={[0.019, -0.003, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556896_1'].geometry}
            material={materials.velgh2r}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__556896_2'].geometry}
            material={materials.greenstripeh2r}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887018'].geometry}
          material={materials.silverh2}
          position={[0.027, 0.347, 0.465]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887017'].geometry}
          material={materials.silverh2}
          position={[0.026, 0.159, 0.517]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887016'].geometry}
          material={materials.silverh2}
          position={[0.026, 0.362, 0.768]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887015'].geometry}
          material={materials.silverh2}
          position={[0.026, 0.333, 0.78]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887014'].geometry}
          material={materials.silverh2}
          position={[0.026, 0.151, 0.712]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887013'].geometry}
          material={materials.silverh2}
          position={[0.026, 0.142, 0.543]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887012'].geometry}
          material={materials.silverh2}
          position={[0.027, 0.316, 0.457]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887011'].geometry}
          material={materials.silverh2}
          position={[0.026, 0.453, 0.596]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887010'].geometry}
          material={materials.silverh2}
          position={[0.026, 0.455, 0.627]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887009'].geometry}
          material={materials.silverh2}
          position={[0.026, 0.17, 0.736]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887008'].geometry}
          material={materials.silverh2}
          position={[-0.014, 0.17, 0.735]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887007'].geometry}
          material={materials.silverh2}
          position={[-0.013, 0.142, 0.543]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887006'].geometry}
          material={materials.silverh2}
          position={[-0.014, 0.333, 0.78]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887005'].geometry}
          material={materials.silverh2}
          position={[-0.013, 0.453, 0.596]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887004'].geometry}
          material={materials.silverh2}
          position={[-0.014, 0.362, 0.768]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887003'].geometry}
          material={materials.silverh2}
          position={[-0.013, 0.347, 0.464]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887002'].geometry}
          material={materials.silverh2}
          position={[-0.013, 0.316, 0.456]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887001'].geometry}
          material={materials.silverh2}
          position={[-0.013, 0.455, 0.627]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556887'].geometry}
          material={materials.silverh2}
          position={[-0.013, 0.159, 0.517]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556878004'].geometry}
          material={materials.velgh2r}
          position={[0.006, 0.289, 0.62]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556878003'].geometry}
          material={materials.velgh2r}
          position={[-0.015, 0.151, 0.712]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556878002'].geometry}
          material={materials.velgh2r}
          position={[0.068, 0.289, 0.62]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556878001'].geometry}
          material={materials.velgh2r}
          position={[-0.056, 0.289, 0.62]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556878'].geometry}
          material={materials.velgh2r}
          position={[0.006, 0.289, 0.62]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556860001'].geometry}
          material={materials.carbonh2r}
          position={[-0.281, 0.953, 0.546]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556860'].geometry}
          material={materials.carbonh2r}
          position={[0.293, 0.953, 0.547]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556842001'].geometry}
          material={materials.grillfh2r}
          position={[-0.138, 0.769, 0.65]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556842'].geometry}
          material={materials.grillfh2r}
          position={[0.15, 0.769, 0.651]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556833001'].geometry}
          material={materials.carbonh2r}
          position={[0.156, 0.765, 0.682]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556833'].geometry}
          material={materials.carbonh2r}
          position={[-0.145, 0.765, 0.681]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556824'].geometry}
          material={materials.carbonh2r}
          position={[0.17, 0.675, 0.183]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556806'].geometry}
          material={materials.windshielfh2r}
          position={[0.006, 1.053, 0.465]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556797003'].geometry}
          material={materials.jogh2r}
          position={[0.01, 0.977, -0.675]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556797002'].geometry}
          material={materials.jogh2r}
          position={[-0.101, 0.932, -0.63]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556797001'].geometry}
          material={materials.jogh2r}
          position={[0.12, 0.932, -0.629]}
          rotation={[0.019, -0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__556797'].geometry}
          material={materials.jogh2r}
          position={[0.009, 0.81, -0.438]}
          rotation={[0.019, -0.003, 0]}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models/Automotive/bike.glb')
