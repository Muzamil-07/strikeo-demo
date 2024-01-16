/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function OptBike (props) {
  const { nodes, materials } = useGLTF('/models/Automotive/test.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.154, 0.941, 0.045]}
        rotation={[1.792, -0.864, 1.673]}
        scale={0.048}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3001_1'].geometry}
          material={materials['PaletteMaterial001.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3001_2'].geometry}
          material={materials['Material.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557418'].geometry}
        material={materials['carbonh2r.001']}
        position={[0.006, 0.854, 0.598]}
        rotation={[0.019, -0.003, 0]}
      />
      <group position={[0.01, 0.365, -0.829]} rotation={[0.019, -0.003, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557256001'].geometry}
          material={materials['treadh2r.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557256001_1'].geometry}
          material={materials['tireh2r.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557247001'].geometry}
        material={materials['h2brckdisc.001']}
        position={[0.033, 0.365, -0.829]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557202001'].geometry}
        material={materials['exhausth2r.001']}
        position={[-0.172, 0.372, -0.551]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557022002'].geometry}
        material={materials['filterh2r.001']}
        position={[0.011, 0.489, 0.283]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557013090'].geometry}
        material={materials['logoh2r2.001']}
        position={[-0.12, 0.629, -0.161]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__556986005'].geometry}
        material={materials['grillfh2r.001']}
        position={[-0.151, 0.807, 0.189]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__556959'].geometry}
        material={materials['chainh2r.001']}
        position={[0.125, 0.366, -0.757]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__556932'].geometry}
        material={materials['brklighth2r.001']}
        position={[0.01, 0.968, -0.853]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Kawasaki#3002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.162, 0.953, -0.055]}
        rotation={[1.819, 0.671, -1.649]}
        scale={0.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Kawasaki#3001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.153, 0.932, 0.076]}
        rotation={[1.792, -0.864, 1.673]}
        scale={0.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Kawasaki#3003'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.145, 0.939, 0.077]}
        rotation={[1.792, -0.864, 1.673]}
        scale={0.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Kawasaki#3004'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.155, 0.961, -0.053]}
        rotation={[1.819, 0.671, -1.649]}
        scale={0.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Kawasaki#3006'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.153, 0.937, 0.063]}
        rotation={[1.792, -0.864, 1.673]}
        scale={0.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Kawasaki#3007'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.164, 0.953, -0.042]}
        rotation={[1.819, 0.671, -1.649]}
        scale={0.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.297, 0.736]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.077, 0.36, 0.664]}
        rotation={[1.904, 0.001, 0.003]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281003'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.076, 0.354, 0.567]}
        rotation={[0.648, -0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281004'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.076, 0.26, 0.542]}
        rotation={[-0.609, -0.003, -0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281005'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.076, 0.207, 0.624]}
        rotation={[-1.866, 0.001, -0.003]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281006'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.077, 0.269, 0.7]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281007'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.353, 0.521]}
        rotation={[0.648, -0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281008'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.399, 0.577]}
        rotation={[1.276, -0.001, 0.003]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281009'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.403, 0.649]}
        rotation={[1.904, 0.001, 0.003]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281010'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.364, 0.71]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281011'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.216, 0.529]}
        rotation={[-0.609, -0.003, -0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281012'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.284, 0.503]}
        rotation={[0.019, -0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281013'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.181, 0.662]}
        rotation={[-1.866, 0.001, -0.003]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281014'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.177, 0.59]}
        rotation={[-1.237, -0.001, -0.003]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281015'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.079, 0.227, 0.718]}
        rotation={[-2.494, 0.003, -0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281016'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.09, 0.297, 0.737]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281017'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.088, 0.36, 0.664]}
        rotation={[-1.237, -0.001, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281018'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.088, 0.354, 0.567]}
        rotation={[-2.494, 0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281019'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.088, 0.26, 0.543]}
        rotation={[2.532, 0.003, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281020'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.088, 0.207, 0.625]}
        rotation={[1.276, -0.001, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281021'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.088, 0.269, 0.7]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281022'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.091, 0.353, 0.522]}
        rotation={[-2.494, 0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281023'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.091, 0.399, 0.578]}
        rotation={[-1.866, 0.001, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281024'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.09, 0.403, 0.65]}
        rotation={[-1.237, -0.001, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281025'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.09, 0.364, 0.711]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281026'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.091, 0.216, 0.53]}
        rotation={[2.532, 0.003, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281027'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.091, 0.284, 0.503]}
        rotation={[-3.122, 0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281028'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.09, 0.181, 0.662]}
        rotation={[1.276, -0.001, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281029'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.09, 0.177, 0.59]}
        rotation={[1.904, 0.001, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#281030'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.09, 0.227, 0.718]}
        rotation={[0.648, -0.003, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#280001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.12, 0.541, 0.519]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#280002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.108, 0.541, 0.518]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#266001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.246, 0.53, 0.067]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#266002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.232, 0.53, 0.066]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#252001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.091, 1.005, 0.487]}
        rotation={[0.811, 0.036, 2.239]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#252002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.061, 0.968, 0.549]}
        rotation={[0.811, 0.036, 2.239]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#252003'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.117, 1.047, 0.421]}
        rotation={[0.798, 0.126, 2.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#252004'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.142, 1.089, 0.356]}
        rotation={[0.926, 0.012, 2.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#252005'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.073, 0.968, 0.549]}
        rotation={[-2.33, 0.04, 2.235]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#252006'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.155, 1.089, 0.357]}
        rotation={[-2.216, 0.016, 2.424]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#252007'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.103, 1.005, 0.488]}
        rotation={[-2.33, 0.04, 2.235]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#252008'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.13, 1.047, 0.422]}
        rotation={[-2.343, 0.13, 2.385]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.2, 0.413, -0.065]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.2, 0.341, -0.028]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251003'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.2, 0.35, 0.063]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251004'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.199, 0.45, 0.097]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251005'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.199, 0.471, 0.071]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251006'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.199, 0.484, 0.028]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251007'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.2, 0.479, -0.022]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251008'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.135, 0.521, -0.195]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251009'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.162, 0.444, -0.097]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251010'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.162, 0.499, -0.089]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#251011'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.162, 0.502, -0.114]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.115, 0.604, -0.053]}
        rotation={[-3.122, 0.003, 1.571]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.126, 0.598, -0.213]}
        rotation={[-3.122, 0.003, 1.571]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250003'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.131, 0.594, -0.172]}
        rotation={[-3.122, 0.003, 1.571]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250004'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.119, 0.599, -0.116]}
        rotation={[-3.122, 0.003, 1.571]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250005'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.544, -0.19]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250006'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.49, -0.222]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250007'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.439, -0.229]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250008'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.372, -0.245]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250009'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.309, -0.231]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250010'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.294, -0.139]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250011'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.341, -0.081]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250012'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.162, 0.36, 0.038]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250013'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.162, 0.417, 0.09]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250014'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.574, -0.127]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250015'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.572, -0.061]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250016'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.162, 0.559, 0.001]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250017'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.162, 0.474, 0.107]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#250018'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.162, 0.51, 0.051]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#243001'].geometry}
        material={materials['Material.001']}
        position={[0.236, 0.469, 0.203]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#243002'].geometry}
        material={materials['Material.001']}
        position={[-0.222, 0.469, 0.201]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#234001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.125, 0.605, -0.187]}
        rotation={[1.59, 0, 1.574]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#234002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.125, 0.653, -0.136]}
        rotation={[1.59, 0, 1.574]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#231001'].geometry}
        material={materials['logoh2r2.001']}
        position={[-0.142, 0.894, -0.687]}
        rotation={[-1.28, 0.485, 1.571]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#231002'].geometry}
        material={materials['logoh2r2.001']}
        position={[0.16, 0.911, -0.726]}
        rotation={[1.862, 0.452, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#228001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.152, 0.881, 0.338]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#228002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.165, 0.881, 0.339]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#228003'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.161, 0.905, 0.336]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#228004'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.174, 0.905, 0.337]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#222001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.124, 0.879, -0.707]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#222002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.105, 0.879, -0.708]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#218001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.237, 0.627, 0.419]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#218002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.249, 0.627, 0.421]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#217001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.023, 0.847, -0.753]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#217002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.019, 0.878, -0.792]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#217003'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.043, 0.847, -0.753]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#217004'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.039, 0.878, -0.792]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.277, 0.547, 0.331]}
        rotation={[0.472, -0.624, 1.578]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.231, 0.512, 0.121]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215003'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.243, 0.519, 0.036]}
        rotation={[-0.609, -0.003, -0.002]}
        scale={0.524}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215004'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.264, 0.547, 0.329]}
        rotation={[-2.672, -0.618, 1.574]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215005'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.217, 0.512, 0.119]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215006'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.227, 0.519, 0.034]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-0.524}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215007'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.225, 0.747, 0.246]}
        rotation={[-0.716, 0.226, -1]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215008'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.099, 0.967, 0.132]}
        rotation={[-2.502, -0.355, 2.018]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215009'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.024, 0.802, -0.703]}
        rotation={[-2.541, 1.259, -1.577]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215010'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.01, 0.719, -0.581]}
        rotation={[-2.541, 1.259, -1.577]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215011'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.292, 0.731, 0.332]}
        rotation={[2.538, 0.097, -0.128]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215012'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.107, 0.755, -0.635]}
        rotation={[2.321, 1.063, -0.191]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215013'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.27, 0.71, 0.429]}
        rotation={[2.568, 0.226, -0.316]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215014'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.241, 0.681, 0.532]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215015'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.208, 0.842, 0.042]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215016'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.081, 0.899, 0.252]}
        rotation={[-2.052, -0.478, 2.214]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215017'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.133, 0.924, -0.789]}
        rotation={[2.571, 1.111, 0.314]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215018'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.154, 0.924, -0.788]}
        rotation={[-0.564, 1.106, 0.307]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215019'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.127, 0.755, -0.634]}
        rotation={[-0.812, 1.059, -0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215020'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.067, 0.899, 0.251]}
        rotation={[1.093, -0.481, 2.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215021'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.085, 0.967, 0.131]}
        rotation={[0.641, -0.36, 2.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215022'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.044, 0.802, -0.703]}
        rotation={[0.59, 1.254, -1.565]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215023'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.223, 0.842, 0.043]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215024'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.305, 0.731, 0.333]}
        rotation={[-0.603, 0.091, -0.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215025'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.282, 0.71, 0.431]}
        rotation={[-0.573, 0.221, -0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215026'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.253, 0.681, 0.534]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215027'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.173, 0.507, -0.634]}
        rotation={[-0.498, 0.085, 0.335]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215028'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.172, 0.519, -0.528]}
        rotation={[-0.417, -0.171, 0.228]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215029'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.185, 0.395, -0.508]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215030'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.157, 0.35, -0.702]}
        rotation={[-0.372, -0.342, 0.273]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215031'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.159, 0.353, -0.32]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215032'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.169, 0.416, -0.389]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215033'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.155, 0.425, -0.291]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215034'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.154, 0.422, -0.369]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215035'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.175, 0.437, -0.332]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215036'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.137, 0.316, -0.195]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215037'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.179, 0.425, -0.294]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215038'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.16, 0.329, -0.261]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215039'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.154, 0.466, -0.35]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215040'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.119, 0.465, 0.597]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215041'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.119, 0.37, 0.636]}
        rotation={[2.532, 0.003, 0.002]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215042'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.13, 0.37, 0.637]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215043'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.131, 0.465, 0.597]}
        rotation={[-0.609, -0.003, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215044'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.179, 0.943, 0.536]}
        rotation={[-2.591, -0.475, 1.879]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215045'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.173, 0.929, 0.569]}
        rotation={[-2.591, -0.475, 1.879]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215046'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.191, 0.943, 0.538]}
        rotation={[0.552, -0.48, 1.883]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#215047'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.184, 0.929, 0.57]}
        rotation={[0.552, -0.48, 1.883]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#214001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.113, 0.724, -0.285]}
        rotation={[-0.726, 0.408, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#214002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.096, 0.724, -0.286]}
        rotation={[2.414, 0.412, 0.038]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#213001'].geometry}
        material={materials['carbonh2r.001']}
        position={[0.15, 0.767, 0.64]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#213002'].geometry}
        material={materials['carbonh2r.001']}
        position={[-0.139, 0.767, 0.639]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#211001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.039, 1.012, -0.077]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#211002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.068, 1.011, -0.006]}
        rotation={[-3.122, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#211003'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.008, 1.01, 0.039]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#211004'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.052, 1.011, -0.006]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Group#211005'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.023, 1.012, -0.077]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557454001'].geometry}
        material={materials['h2brckdisc.001']}
        position={[-0.075, 0.29, 0.62]}
        rotation={[3.002, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557454002'].geometry}
        material={materials['h2brckdisc.001']}
        position={[0.087, 0.29, 0.62]}
        rotation={[-0.14, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557445001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[-0.072, 0.289, 0.618]}
        rotation={[3.002, 0.003, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557445002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.083, 0.289, 0.618]}
        rotation={[-0.14, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557355001'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.036, 0.318, -0.408]}
        rotation={[0.019, -0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__557355002'].geometry}
        material={materials['PaletteMaterial001.001']}
        position={[0.035, 0.318, -0.408]}
        rotation={[0.019, -0.003, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/Automotive/test.glb')
