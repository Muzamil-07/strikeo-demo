/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { DeviceOrientationControls, useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function OptimizeStore (props) {
  const { nodes, materials } = useGLTF('/final optimized room1.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.57, 2.497, -0.585]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.627}
      >
        <mesh
          geometry={nodes.body002.geometry}
          material={nodes.body002.material}
          position={[0, 0.93, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body003.geometry}
          material={materials['roof lamps']}
          position={[0, 0.93, 0.001]}
          rotation={[0, 0, Math.PI]}
          scale={1.025}
        />
        <mesh
          geometry={nodes.body007.geometry}
          material={nodes.body007.material}
          position={[0, 0.93, -1.815]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body010.geometry}
          material={nodes.body010.material}
          position={[0, 0.93, -3.266]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body011.geometry}
          material={nodes.body011.material}
          position={[0, 0.93, 1.615]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body009.geometry}
          material={nodes.body009.material}
          position={[0, 0.93, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <group position={[0, 0.98, 0.011]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh geometry={nodes.lamp.geometry} material={materials.bulb} />
          <mesh
            geometry={nodes.lamp_1.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.98, -1.815]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh geometry={nodes.lamp.geometry} material={materials.bulb} />
          <mesh
            geometry={nodes.lamp_1.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.98, 1.615]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh geometry={nodes.lamp.geometry} material={materials.bulb} />
          <mesh
            geometry={nodes.lamp_1.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.98, -3.266]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh geometry={nodes.lamp.geometry} material={materials.bulb} />
          <mesh
            geometry={nodes.lamp_1.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.861, -3.257]} rotation={[0, 0, Math.PI]}>
          <mesh
            geometry={nodes.mount017.geometry}
            material={nodes.mount017.material}
          />
          <mesh
            geometry={nodes.mount017_1.geometry}
            material={nodes.mount017_1.material}
          />
        </group>
        <mesh
          geometry={nodes.rubber_ring001.geometry}
          material={nodes.rubber_ring001.material}
          position={[0, 0.861, 0.037]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.rubber_ring002.geometry}
          material={nodes.rubber_ring002.material}
          position={[0, 0.861, 0.042]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.rubber_ring006.geometry}
          material={nodes.rubber_ring006.material}
          position={[0, 0.016, 0]}
          rotation={[0, 0, Math.PI]}
        />
      </group>
      <group
        position={[-0.106, -0.009, 0.007]}
        rotation={[0, 1.571, 0]}
        scale={1.018}
      >
        <mesh
          geometry={nodes.WoodenTable_03_body.geometry}
          material={materials.WoodenTable_03}
          position={[-0.004, 0.002, -0.015]}
          scale={1.057}
        />
      </group>
      <group
        position={[1.86, 0.614, 1.383]}
        rotation={[Math.PI / 2, 0, 0.78]}
        scale={0.039}
      >
        <mesh
          geometry={nodes.pCube12.geometry}
          material={materials['BAG BLACK ']}
          position={[10.175, 8.053, 0.154]}
          rotation={[0, 0, 0.78]}
        />
      </group>
      <group
        position={[1.853, 0.605, 1.9]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.038}
      >
        <mesh
          geometry={nodes.pCube12003.geometry}
          material={materials['blue bag']}
          position={[9.229, 8.245, 0.444]}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          geometry={nodes.pCube3.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          geometry={nodes.pCube8.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
      </group>
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials['wall/roof']}
        position={[2.412, 1.469, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3.233, 1.043, 1.472]}
      />
      <mesh
        geometry={nodes.Curve003.geometry}
        material={materials['wall logo']}
        position={[2.399, 1.587, 0.01]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.048}
      />
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
        scale={0.071}
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
        position={[-0.397, 0.676, -0.453]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.783}
      />
      <mesh
        geometry={nodes.buttons001.geometry}
        material={nodes.buttons001.material}
        position={[-0.108, 0.894, 1.757]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.Lenses001.geometry}
        material={materials.GLASSES}
        position={[-0.107, 1.231, 1.753]}
        rotation={[-3.116, -0.772, -3.107]}
        scale={0.741}
      />
      <group
        position={[-0.058, 1.147, 1.804]}
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
        position={[-0.039, 0.696, 2.614]}
        rotation={[0, 0, -0.276]}
        scale={0.671}
      />
      <mesh
        geometry={nodes.mp002.geometry}
        material={materials['TYRE Baked']}
        position={[-0.096, 0.217, 2.614]}
        rotation={[Math.PI, -1.159, -1.585]}
        scale={0.671}
      />
      <mesh
        geometry={nodes.mp004.geometry}
        material={materials['TYRE Baked']}
        position={[0.109, 0.696, 2.614]}
        rotation={[0, 0, -0.276]}
        scale={0.671}
      />
      <mesh
        geometry={nodes.TireRack_low005.geometry}
        material={materials['TYRE RACK S']}
        position={[-0.098, 0.276, 2.613]}
        rotation={[0, -1.571, 0]}
        scale={[0.006, 0.005, 0.002]}
      />
      <mesh
        geometry={nodes.Curve.geometry}
        material={nodes.Curve.material}
        position={[1.841, 0.6, 1.92]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
        position={[1.841, 0.6, 1.92]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        geometry={nodes.Curve002.geometry}
        material={nodes.Curve002.material}
        position={[1.841, 0.6, 1.92]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        geometry={nodes.Curve004.geometry}
        material={nodes.Curve004.material}
        position={[1.871, 0.571, 1.901]}
        rotation={[-Math.PI, Math.PI / 4, -1.555]}
        scale={0.129}
      />
      <mesh
        geometry={nodes.Curve005.geometry}
        material={nodes.Curve005.material}
        position={[1.826, 0.602, 1.901]}
        rotation={[-Math.PI, Math.PI / 4, 1.557]}
        scale={0.129}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials['sign right ']}
        position={[1.918, 1.769, 1.646]}
        scale={[0.128, 0.128, 0.472]}
      />
      <mesh
        geometry={nodes.Plane012.geometry}
        material={materials['sign image 2']}
        position={[1.803, 1.766, 1.642]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.723}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials['sign box left']}
        position={[1.918, 1.769, -1.585]}
        scale={[0.128, 0.128, 0.472]}
      />
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials['sign image']}
        position={[1.803, 1.766, -1.589]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.723}
      />
      <mesh
        geometry={nodes.AFootballV1001.geometry}
        material={materials['balls baked']}
        position={[2.013, 1.243, -2.81]}
        rotation={[0, 1.571, 0]}
        scale={0.128}
      />
      <mesh
        geometry={nodes.TennisRacketV1.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.901, 1.697, -2.782]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.307}
      />
      <mesh
        geometry={nodes.Barres_métal003.geometry}
        material={materials['RACK baked']}
        position={[1.934, 0, 1.644]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.953}
      />
      <mesh
        geometry={nodes.tires.geometry}
        material={materials['TYRE BIKE S']}
        position={[-0.882, 0.24, 0.135]}
        rotation={[0.006, -0.003, 0]}
        scale={0.779}
      />
      <mesh
        geometry={nodes.BikerJacket_Leather_0002.geometry}
        material={materials['manequins baked']}
        position={[0.446, 0.953, 1.472]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.009, 0.007, 0.007]}
      />
      <mesh
        geometry={nodes.BikerJacket_Metals_0002.geometry}
        material={materials['jacket button.001']}
        position={[0.384, 0.876, 1.379]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.009, 0.007, 0.007]}
      />
      <mesh
        geometry={nodes.spoiler001.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Vizer001.geometry}
        material={materials.bake}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
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
        geometry={nodes.spoiler016.geometry}
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
        geometry={nodes.spoiler033.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.spoiler034.geometry}
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
        position={[-0.202, -0.008, -2.578]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.838}
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
        position={[0.273, 0.785, -2.465]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.04}
      />
      <mesh
        geometry={nodes.Plane018_button__0002.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0003.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0004.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0005.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0006.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0007.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0008.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0009.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0367.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.466]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0388.geometry}
        material={materials.wifi}
        position={[-0.741, 0.752, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0395.geometry}
        material={materials.wifi}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <group
        position={[-0.741, 0.746, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
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
      <group
        position={[1.901, 1.697, -2.782]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.307}
      >
        <mesh
          geometry={nodes.V1TennisRacket002.geometry}
          material={materials['basebat baked']}
        />
        <mesh
          geometry={nodes.V1TennisRacket002_1.geometry}
          material={materials['bake racket']}
        />
      </group>
      <mesh
        geometry={nodes.Vizer002.geometry}
        material={materials['gold helmet baked']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        geometry={nodes.Object_2009.geometry}
        material={materials['shoe.003']}
        position={[-0.052, 0.1, 1.818]}
        rotation={[-Math.PI / 2, 0, -2.462]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.s23Pluse_cream_mat_s23_cream_0001.geometry}
        material={materials['mobile 2']}
        position={[-0.153, 1.034, 0.127]}
        rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
        scale={1.064}
      />
      <mesh
        geometry={nodes.s23Pluse_lavender_mat_s23_lavender_0001.geometry}
        material={materials['mobile 1']}
        position={[-0.152, 1.034, -0.065]}
        rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
        scale={1.064}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1001.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.951, 0.153, 2.161]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1002.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1003.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1004.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.922, 1.495, 1.938]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1005.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.922, 1.495, 2.423]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        geometry={nodes.GREEN_HELMET_1006.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.922, 1.495, 2.908]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        geometry={nodes.Object_2001.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.934, 0.914, 1.419]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_2003.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[0.421, 0.099, 1.457]}
        rotation={[-Math.PI / 2, 0, -2.294]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_2004.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.934, 0.914, 1.879]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_2005.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.934, 0.914, 2.398]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_2006.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.934, 0.914, 2.839]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_2007.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.934, 0.914, 1.391]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Object_2002.geometry}
        material={materials['mobile stand']}
        position={[-0.165, 0.925, -0.375]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Object_2008.geometry}
        material={materials['mobile stand']}
        position={[-0.165, 0.925, -0.183]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Object_2010.geometry}
        material={materials['mobile stand 2']}
        position={[-0.165, 0.925, 0.264]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Object_2012.geometry}
        material={materials['mobile stand 2']}
        position={[-0.165, 0.925, 0.455]}
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload('/final optimized room1.glb')
