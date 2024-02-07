/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function MobileStore (props) {
  const { nodes, materials } = useGLTF('/Mobile Version1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Ceiling.geometry}
        material={materials['wall/roof']}
        position={[2.412, 1.467, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3.233, 1.043, 1.472]}
      />
      <mesh
        geometry={nodes.wall_logo.geometry}
        material={materials.PaletteMaterial001}
        position={[2.398, 2.277, 0.03]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.048}
      />
      <mesh
        geometry={nodes.lamp004.geometry}
        material={materials['roof lamps']}
        position={[-1.049, 1.804, 0.417]}
        rotation={[0, 0, Math.PI]}
        scale={0.591}
      />
      <RigidBody
        colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
        lockTranslations // Lock translations to prevent movement during physics simulation
        lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
      >
        <mesh
          geometry={nodes.floor.geometry}
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
        geometry={nodes.brick_walls.geometry}
        material={materials['brick wall baked']}
        position={[-1.313, 1.398, 0.123]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[3.191, 1, 1.47]}
      />
      <mesh
        geometry={nodes.desk_logo.geometry}
        material={materials.logo}
        position={[-0.357, 0.613, -0.069]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.632}
      />
      <mesh
        geometry={nodes.WoodenTable_03_body.geometry}
        material={materials.WoodenTable_03}
        position={[-0.126, 0.281, 0.03]}
        rotation={[0, 1.571, 0]}
        scale={[0.834, 0.869, 0.869]}
      />
      <mesh
        geometry={nodes.glasses.geometry}
        material={materials.GLASSES}
        position={[-0.082, 1.169, 1.754]}
        rotation={[-3.116, -0.772, -3.107]}
        scale={0.703}
      />
      <mesh
        geometry={nodes.bandana.geometry}
        material={materials['bandana white.001']}
        position={[-0.065, 1.1, 1.777]}
        rotation={[-1.577, 0.003, -2.439]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.sign_board.geometry}
        material={materials['sign box left']}
        position={[1.915, 1.673, -1.452]}
        scale={[0.116, 0.116, 0.426]}
      />
      <mesh
        geometry={nodes.sign_image.geometry}
        material={materials['sign image']}
        position={[1.811, 1.67, -1.456]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.654}
      />
      <mesh
        geometry={nodes.balls.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.911, 1.139, -1.528]}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
      />
      <mesh
        geometry={nodes.racks.geometry}
        material={materials['RACK baked']}
        position={[1.932, 0.009, 1.569]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.896}
      />
      <mesh
        geometry={nodes.bike_tyre.geometry}
        material={materials['TYRE BIKE S']}
        position={[-0.858, 0.196, 0.162]}
        rotation={[0.001, -0.003, 0]}
        scale={0.664}
      />
      <mesh
        geometry={nodes.Bike.geometry}
        material={materials.bike}
        position={[-0.854, 0.313, 0.205]}
        rotation={[3.137, -0.891, Math.PI]}
        scale={0.179}
      />
      <group
        position={[0.29, 0.002, -1.893]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.68}
      >
        <mesh
          geometry={nodes.Object_2001.geometry}
          material={materials['comp_desk_b.001']}
        />
        <mesh
          geometry={nodes.Object_2001_1.geometry}
          material={materials['comp_desk.001']}
        />
        <mesh
          geometry={nodes.Object_2001_2.geometry}
          material={materials['comp_desk_a.001']}
        />
        <mesh
          geometry={nodes.Object_2001_3.geometry}
          material={materials['comp_desk_c.001']}
        />
        <mesh
          geometry={nodes.Object_2001_4.geometry}
          material={materials['setup desk']}
        />
      </group>
      <mesh
        geometry={nodes.cpu.geometry}
        material={materials.cpu}
        position={[0.676, 0.645, -1.802]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.wifi_device.geometry}
        material={materials.wifi}
        position={[0.689, 0.862, -1.795]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.856}
      />
      <mesh
        geometry={nodes.setup.geometry}
        material={materials['tv s']}
        position={[0.067, 0.583, -1.691]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.856}
      />
      <mesh
        geometry={nodes.Racket.geometry}
        material={materials['basebat baked']}
        position={[1.903, 0.866, -1.007]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.189}
      />
      <mesh
        geometry={nodes.gold_helmet.geometry}
        material={materials['gold helmet baked']}
        position={[0.421, 1.151, 1.476]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.buttons002.geometry}
        material={nodes.buttons002.material}
        position={[-0.084, 0.596, 1.764]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.mobile_green.geometry}
        material={materials['mobile 2']}
        position={[-0.169, 0.805, 0.104]}
        rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
        scale={0.859}
      />
      <mesh
        geometry={nodes.mobile_purple.geometry}
        material={materials['mobile 1']}
        position={[-0.169, 0.804, -0.057]}
        rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
        scale={0.859}
      />
      <mesh
        geometry={nodes.helmets.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.915, 1.446, 1.315]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.bats.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.92, 0.443, -1.393]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Footballs.geometry}
        material={materials['balls baked.001']}
        position={[1.941, 0.854, -1.422]}
        rotation={[0, 1.571, 0]}
        scale={0.138}
      />
      <mesh
        geometry={nodes.sport_helmet.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.926, 1.372, -0.955]}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
      />
      <mesh
        geometry={nodes.cap.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.935, 1.36, -1.483]}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
      />
      <mesh
        geometry={nodes.sport_gloves.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.909, 1.214, -0.989]}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
      />
      <mesh
        geometry={nodes.base_bat.geometry}
        material={materials['basebat baked']}
        position={[1.913, 0.502, -1.023]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.189}
      />
      <mesh
        geometry={nodes.pads.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.92, 0.443, -1.393]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.strips001.geometry}
        material={materials['ground strips s']}
        position={[-0.152, 0.518, -1.838]}
        scale={0.054}
      />
      <mesh
        geometry={nodes.cans.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.948, 0.153, 1.277]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.bags.geometry}
        material={materials.PaletteMaterial001}
        position={[2.398, 2.277, 0.03]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.048}
      />
      <mesh
        geometry={nodes.wall_logo002.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.037, 1.101, 1.813]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        geometry={nodes.BikerJacket_Leather_0002.geometry}
        material={materials['manequins baked.001']}
        position={[0.113, 0.761, 1.709]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.008, 0.006, 0.006]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials['TYRE Baked']}
        position={[-0.086, 0.181, 2.392]}
        rotation={[Math.PI, -1.159, -1.585]}
        scale={0.563}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials['TYRE Baked']}
        position={[0.087, 0.582, 2.392]}
        rotation={[0, 0, -0.276]}
        scale={0.563}
      />
      <mesh
        geometry={nodes.Plane007.geometry}
        material={materials['TYRE Baked']}
        position={[-0.037, 0.582, 2.392]}
        rotation={[0, 0, -0.276]}
        scale={0.563}
      />
      <mesh
        geometry={nodes.Gloves_1.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.923, 1.197, 1.479]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.Gloves2.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.923, 1.197, 1.03]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.shoes1.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[0.42, 0.094, 1.475]}
        rotation={[-Math.PI / 2, 0, -2.294]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.shoes2.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.935, 0.865, 1.491]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.shoes3.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.935, 0.865, 1.032]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.shoes4.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[-0.024, 0.094, 1.808]}
        rotation={[-Math.PI / 2, 0, -2.541]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Object_0005.geometry}
        material={materials['mobile stand']}
        position={[-0.169, 0.739, -0.3]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Object_0006.geometry}
        material={materials['mobile stand']}
        position={[-0.169, 0.739, -0.146]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Object_0007.geometry}
        material={materials['mobile stand']}
        position={[-0.169, 0.739, 0.215]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Object_0008.geometry}
        material={materials['mobile stand']}
        position={[-0.169, 0.739, 0.37]}
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload('/Mobile Version1.glb')
