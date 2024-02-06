/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function MobileStore (props) {
  const { nodes, materials } = useGLTF('/optimized room.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.106, -0.009, 0.007]}
        rotation={[0, 1.571, 0]}
        scale={1.018}
      >
        <mesh
          geometry={nodes.WoodenTable_03_body.geometry}
          material={materials.WoodenTable_03}
          position={[-0.024, 0.359, -0.008]}
          scale={[0.977, 1.018, 1.018]}
        />
      </group>
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials['wall/roof']}
        position={[2.412, 1.467, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3.233, 1.043, 1.472]}
      />
      <mesh
        geometry={nodes.Curve003.geometry}
        material={materials['wall logo']}
        position={[2.398, 2.277, 0.03]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.048}
      />
      <group
        position={[-1.241, 2.202, 0.032]}
        rotation={[0, 0, Math.PI]}
        scale={0.591}
      >
        <mesh geometry={nodes.lamp.geometry} material={materials.bulb} />
        <mesh
          geometry={nodes.lamp_1.geometry}
          material={materials['roof lamps']}
        />
      </group>
      <RigidBody
        colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
        lockTranslations // Lock translations to prevent movement during physics simulation
        lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
      >
        <mesh
          geometry={nodes.Plane003.geometry}
          material={materials['floor ']}
          position={[-0.775, 0, -0.011]}
          scale={[3.191, 3.228, 3.226]}
        />
      </RigidBody>

      <mesh
        geometry={nodes.strips.geometry}
        material={materials['ground strips s']}
        position={[-0.112, 0.002, -0.027]}
        scale={0.061}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials['brick wall baked']}
        position={[-0.757, 1.469, -3.231]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[3.191, 1, 1.47]}
      />
      <mesh
        geometry={nodes.Curve012.geometry}
        material={materials.logo}
        position={[-0.389, 0.753, -0.086]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.753}
      />
      <mesh
        geometry={nodes.buttons001.geometry}
        material={nodes.buttons001.material}
        position={[-0.092, 0.848, 1.749]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.Lenses001.geometry}
        material={materials.GLASSES}
        position={[-0.091, 1.168, 1.745]}
        rotation={[-3.116, -0.772, -3.107]}
        scale={0.703}
      />
      <group
        position={[-0.045, 1.088, 1.794]}
        rotation={[-1.577, 0.003, -2.439]}
        scale={0.001}
      >
        <mesh
          geometry={nodes.Object_5004.geometry}
          material={materials['bandana black.001']}
        />
        <mesh
          geometry={nodes.Object_5004_1.geometry}
          material={materials['bandana white.001']}
        />
      </group>
      <mesh
        geometry={nodes.mp001.geometry}
        material={materials['TYRE Baked']}
        position={[-0.038, 0.61, 2.392]}
        rotation={[0, 0, -0.276]}
        scale={0.594}
      />
      <mesh
        geometry={nodes.mp002.geometry}
        material={materials['TYRE Baked']}
        position={[-0.089, 0.186, 2.392]}
        rotation={[Math.PI, -1.159, -1.585]}
        scale={0.594}
      />
      <mesh
        geometry={nodes.mp004.geometry}
        material={materials['TYRE Baked']}
        position={[0.093, 0.61, 2.392]}
        rotation={[0, 0, -0.276]}
        scale={0.594}
      />
      <mesh
        geometry={nodes.TireRack_low005.geometry}
        material={materials['TYRE RACK S']}
        position={[-0.09, 0.238, 2.391]}
        rotation={[0, -1.571, 0]}
        scale={[0.006, 0.004, 0.002]}
      />
      <mesh
        geometry={nodes.pCube12.geometry}
        material={materials['BAG BLACK ']}
        position={[1.92, 0.58, 1.018]}
        rotation={[Math.PI / 2, 0, 1.56]}
        scale={0.037}
      />
      <mesh
        geometry={nodes.pCube12003.geometry}
        material={materials['blue bag']}
        position={[1.882, 0.562, 1.507]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        geometry={nodes.Plane012.geometry}
        material={materials['sign image 2']}
        position={[1.811, 1.668, 1.555]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.656}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials['sign box left']}
        position={[1.915, 1.673, -1.452]}
        scale={[0.116, 0.116, 0.426]}
      />
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials['sign image']}
        position={[1.811, 1.67, -1.456]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.654}
      />
      <mesh
        geometry={nodes.TennisRacketV1.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.914, 1.204, -1.323]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.289}
      />
      <mesh
        geometry={nodes.Barres_métal003.geometry}
        material={materials['RACK baked']}
        position={[1.932, 0.009, 1.569]}
        rotation={[0, -1.571, 0]}
        scale={0.896}
      />
      <mesh
        geometry={nodes.tires.geometry}
        material={materials['TYRE BIKE S']}
        position={[-0.858, 0.234, 0.159]}
        rotation={[0.006, -0.003, 0]}
        scale={0.751}
      />
      <mesh
        geometry={nodes.BikerJacket_Leather_0002.geometry}
        material={materials['manequins baked']}
        position={[0.434, 0.905, 1.478]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.008, 0.006, 0.006]}
      />
      <mesh
        geometry={nodes.BikerJacket_Metals_0002.geometry}
        material={materials['jacket button.001']}
        position={[0.375, 0.832, 1.39]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.008, 0.006, 0.006]}
      />
      <mesh
        geometry={nodes.Vizer001.geometry}
        material={materials.bake}
        position={[0.408, 1.171, 1.445]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.203}
      />
      <mesh
        geometry={nodes.spoiler002.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler003.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler004.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler005.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler006.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler007.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler008.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler009.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler010.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler011.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler012.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler013.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler014.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler015.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler017.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler018.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler019.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler020.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler021.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler022.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler023.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler024.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler025.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler026.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler027.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler028.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler029.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler030.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler053.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <group
        position={[0.287, -0.001, -1.905]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.771}
      >
        <mesh
          geometry={nodes.Object_2001_1.geometry}
          material={materials['comp_desk_b.001']}
        />
        <mesh
          geometry={nodes.Object_2001_2.geometry}
          material={materials['comp_desk.001']}
        />
        <mesh
          geometry={nodes.Object_2001_3.geometry}
          material={materials['comp_desk_a.001']}
        />
        <mesh
          geometry={nodes.Object_2001_4.geometry}
          material={materials['comp_desk_c.001']}
        />
        <mesh
          geometry={nodes.Object_2001_5.geometry}
          material={materials['setup desk']}
        />
      </group>
      <mesh
        geometry={nodes.Object_7003.geometry}
        material={materials.cpu}
        position={[0.725, 0.729, -1.802]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.037}
      />
      <mesh
        geometry={nodes.Plane018_button__0367.geometry}
        material={materials.wifi}
        position={[0.739, 0.975, -1.794]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.972}
      />
      <mesh
        geometry={nodes.Plane018_button__0388.geometry}
        material={materials.wifi}
        position={[0.025, 0.677, -1.706]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.972}
      />
      <group
        position={[-0.084, 0.623, -1.74]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.972}
      >
        <mesh
          geometry={nodes.Plane018_button__0397.geometry}
          material={materials['laptop s']}
        />
        <mesh
          geometry={nodes.Plane018_button__0397_1.geometry}
          material={materials['tv s']}
        />
      </group>
      <mesh
        geometry={nodes.TennisRacketV1002.geometry}
        material={materials['basebat baked']}
        position={[1.903, 0.866, -1.007]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.189}
      />
      <mesh
        geometry={nodes.Vizer002.geometry}
        material={materials['gold helmet baked']}
        position={[0.421, 1.151, 1.476]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.Object_2009.geometry}
        material={materials['shoe.003']}
        position={[-0.039, 0.094, 1.807]}
        rotation={[-Math.PI / 2, 0, -2.462]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.s23Pluse_cream_mat_s23_cream_0001.geometry}
        material={materials['mobile 2']}
        position={[-0.154, 1.008, 0.121]}
        rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
        scale={1.024}
      />
      <mesh
        geometry={nodes.s23Pluse_lavender_mat_s23_lavender_0001.geometry}
        material={materials['mobile 1']}
        position={[-0.154, 1.008, -0.064]}
        rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
        scale={1.024}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.919, 1.451, 1.103]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1001.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.948, 0.153, 1.308]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1002.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.914, 1.443, 1.521]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1003.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.923, 1.197, 1.03]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1004.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.923, 1.197, 1.479]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.Object_2001.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.92, 0.443, -1.393]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Object_2003.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[0.409, 0.094, 1.464]}
        rotation={[-Math.PI / 2, 0, -2.294]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Object_2004.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.935, 0.865, 1.491]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Object_2007.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.935, 0.865, 1.032]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Object_2002.geometry}
        material={materials['mobile stand']}
        position={[-0.166, 0.903, -0.362]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Object_2008.geometry}
        material={materials['mobile stand']}
        position={[-0.166, 0.903, -0.178]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Object_2010.geometry}
        material={materials['mobile stand 2']}
        position={[-0.166, 0.903, 0.253]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Object_2012.geometry}
        material={materials['mobile stand 2']}
        position={[-0.166, 0.903, 0.437]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.AFootballV1002.geometry}
        material={materials['balls baked.001']}
        position={[1.941, 0.854, -1.422]}
        rotation={[0, 1.571, 0]}
        scale={0.138}
      />
    </group>
  )
}

useGLTF.preload('/optimized room.glb')
