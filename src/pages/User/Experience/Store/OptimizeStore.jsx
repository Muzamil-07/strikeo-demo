/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function OptimizeStore (props) {
  const { nodes, materials } = useGLTF('/glb TEST SHADERS.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.57, 2.497, -0.585]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.627}
      >
        <mesh
          geometry={nodes.body001.geometry}
          material={materials.plastic_matte_black}
          position={[0, 0.93, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body002.geometry}
          material={materials.plastic_matte_black}
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
          geometry={nodes.body004.geometry}
          material={materials.plastic_matte_black}
          position={[0, 0.93, 0.003]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body007.geometry}
          material={materials.plastic_matte_black}
          position={[0, 0.93, -1.815]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body010.geometry}
          material={materials.plastic_matte_black}
          position={[0, 0.93, -3.266]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body011.geometry}
          material={materials.plastic_matte_black}
          position={[0, 0.93, 1.615]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body005.geometry}
          material={materials.plastic_matte_black}
          position={[0, 0.93, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body006.geometry}
          material={materials.plastic_matte_black}
          position={[0, 0.93, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.body008.geometry}
          material={materials.plastic_matte_black}
          position={[0, 0.93, 1.372]}
          rotation={[0, 0, Math.PI]}
        />

        <mesh
          geometry={nodes.body009.geometry}
          material={materials.plastic_matte_black}
          position={[0, 0.93, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <group position={[0, 0.98, 0.003]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            geometry={nodes.lamp.geometry}
            material={materials.Plastic_White_Rough}
          />
          <mesh
            geometry={nodes.lamp_1.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.98, -1.815]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            geometry={nodes.lamp.geometry}
            material={materials.Plastic_White_Rough}
          />
          <mesh
            geometry={nodes.lamp_1.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.98, 1.615]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            geometry={nodes.lamp.geometry}
            material={materials.Plastic_White_Rough}
          />
          <mesh
            geometry={nodes.lamp_1.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.98, -3.266]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            geometry={nodes.lamp.geometry}
            material={materials.Plastic_White_Rough}
          />
          <mesh
            geometry={nodes.lamp_1.geometry}
            material={materials.emission}
          />
        </group>
        <mesh
          geometry={nodes.lampholder.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.lampholder001.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, -1.904]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.lampholder002.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, 0.003]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.lampholder003.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, 1.615]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.lampholder004.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, -1.815]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.lampholder005.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, -3.266]}
          rotation={[0, 0, Math.PI]}
        />
        <group position={[0, 0.861, -1.872]} rotation={[0, 0, Math.PI]}>
          <mesh
            geometry={nodes.mount017.geometry}
            material={materials['metals (aluminium)']}
          />
          <mesh
            geometry={nodes.mount017_1.geometry}
            material={materials.rubber}
          />
        </group>
        <group position={[0, 0.861, -3.257]} rotation={[0, 0, Math.PI]}>
          <mesh
            geometry={nodes.mount017.geometry}
            material={materials['metals (aluminium)']}
          />
          <mesh
            geometry={nodes.mount017_1.geometry}
            material={materials.rubber}
          />
        </group>
        <mesh
          geometry={nodes.rubber_ring001.geometry}
          material={materials.rubber}
          position={[0, 0.861, 0.037]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.rubber_ring002.geometry}
          material={materials.rubber}
          position={[0, 0.861, 0.042]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.rubber_ring003.geometry}
          material={materials.rubber}
          position={[0, 0.779, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.rubber_ring004.geometry}
          material={materials.rubber}
          position={[0, 0.754, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.rubber_ring005.geometry}
          material={materials.rubber}
          position={[0, 0.747, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.rubber_ring006.geometry}
          material={materials.rubber}
          position={[0, 0.016, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          geometry={nodes.wire.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.78, 0]}
          rotation={[0, 0, Math.PI / 2]}
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
        position={[2.187, 0.315, 1.421]}
        rotation={[-Math.PI / 2, 0, -1.574]}
        scale={0.011}
      >
        <mesh
          geometry={nodes.Object_2006.geometry}
          material={materials['SHOES S']}
          position={[2.436, -22.536, 42.596]}
          scale={0.908}
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
          position={[0.61, -0.604, 0]}
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
          material={materials['BAG S']}
          position={[17.657, 17.657, 0]}
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
        <mesh
          geometry={nodes.polySurface4.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
      </group>
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials['synthetic_wood.001']}
        position={[2.412, 1.469, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3.233, 1.043, 1.472]}
      />
      <mesh
        geometry={nodes.Curve003.geometry}
        material={materials['Shiny Metal']}
        position={[2.399, 1.587, 0.01]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.048}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials['RIGHT WALL']}
        position={[-0.757, 1.469, -3.231]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.191, 1, 1.47]}
      />
      <RigidBody
        colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
        lockTranslations // Lock translations to prevent movement during physics simulation
        lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
      >
        <mesh
          geometry={nodes.Plane003.geometry}
          material={materials.Rock}
          position={[-0.775, 0, -0.011]}
          scale={[3.191, 3.228, 3.226]}
        />
      </RigidBody>

      <mesh
        geometry={nodes.roof.geometry}
        material={materials['Concrete 1']}
        position={[0, 2.938, 0]}
        scale={[3.946, 13.787, 3.763]}
      />
      <mesh
        geometry={nodes.strips.geometry}
        material={materials['ground strips s']}
        position={[-0.112, 0.002, -0.027]}
        scale={0.071}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.LEFT}
        position={[-0.757, 1.469, -3.231]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[3.191, 1, 1.47]}
      />
      <mesh
        geometry={nodes.Curve012.geometry}
        material={materials['Fluorescent Lamp']}
        position={[-0.397, 0.676, -0.453]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.783}
      />
      <mesh
        geometry={nodes.Object_2002.geometry}
        material={materials['MBL S']}
        position={[-0.157, 0.926, 0.041]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.s23Pluse_cream_mat_s23_cream_0002.geometry}
        material={materials['MBL SS']}
        position={[-0.157, 1.027, 0.124]}
        rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
        scale={1.064}
      />
      <mesh
        geometry={nodes.s23Pluse_lavender_mat_s23_lavender_0002.geometry}
        material={materials['MBL PNK S']}
        position={[-0.157, 1.023, -0.066]}
        rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
        scale={1.064}
      />
      <mesh
        geometry={nodes.buttons001.geometry}
        material={materials['Material.001']}
        position={[-0.108, 0.894, 1.757]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.JEANS_BACK_0003.geometry}
        material={materials['JEANS S']}
        position={[-0.038, 0.495, 1.827]}
        rotation={[3.016, -0.929, 3.068]}
        scale={[0.673, 0.834, 0.67]}
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
        geometry={nodes['t-shirt001'].geometry}
        material={materials['SHIRT S']}
        position={[-0.055, 0.883, 1.813]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.mp001.geometry}
        material={materials['TYRE S']}
        position={[-0.039, 0.696, 2.614]}
        rotation={[0, 0, -0.276]}
        scale={0.671}
      />
      <mesh
        geometry={nodes.mp002.geometry}
        material={materials['TYRE S']}
        position={[-0.096, 0.217, 2.614]}
        rotation={[Math.PI, -1.159, -1.585]}
        scale={0.671}
      />
      <mesh
        geometry={nodes.mp004.geometry}
        material={materials['TYRE S']}
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
        geometry={nodes.Cube002.geometry}
        material={materials['gloves s']}
        position={[1.919, 1.303, 1.284]}
        rotation={[2.319, -0.262, -2.601]}
        scale={0.004}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials['gloves s']}
        position={[1.919, 1.303, 1.759]}
        rotation={[2.319, -0.262, -2.601]}
        scale={0.004}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials['gloves s']}
        position={[1.919, 1.303, 2.27]}
        rotation={[2.319, -0.262, -2.601]}
        scale={0.004}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials['gloves s']}
        position={[1.919, 1.303, 2.731]}
        rotation={[2.319, -0.262, -2.601]}
        scale={0.004}
      />
      <mesh
        geometry={nodes.Curve.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.841, 0.6, 1.92]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        geometry={nodes.Curve001.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.841, 0.6, 1.92]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        geometry={nodes.Curve002.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.841, 0.6, 1.92]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        geometry={nodes.Curve004.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.871, 0.571, 1.901]}
        rotation={[-Math.PI, Math.PI / 4, -1.555]}
        scale={0.129}
      />
      <mesh
        geometry={nodes.Curve005.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.826, 0.602, 1.901]}
        rotation={[-Math.PI, Math.PI / 4, 1.557]}
        scale={0.129}
      />
      <group
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      >
        <mesh
          geometry={nodes.Cylinder581.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cylinder581_1.geometry}
          material={materials.base}
        />
        <mesh
          geometry={nodes.Cylinder581_2.geometry}
          material={materials['Black Plastic.004']}
        />
        <mesh
          geometry={nodes.Cylinder581_3.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Cylinder581_4.geometry}
          material={nodes.Cylinder581_4.material}
        />
        <mesh
          geometry={nodes.Cylinder581_5.geometry}
          material={materials['Black Plastic.005']}
        />
        <mesh
          geometry={nodes.Cylinder581_6.geometry}
          material={materials['glass.001']}
        />
      </group>
      <group
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      >
        <mesh
          geometry={nodes.Cylinder2414.geometry}
          material={materials['Material.005']}
        />
        <mesh
          geometry={nodes.Cylinder2414_1.geometry}
          material={materials['Black Plastic.007']}
        />
        <mesh
          geometry={nodes.Cylinder2414_2.geometry}
          material={materials.basee}
        />
        <mesh
          geometry={nodes.Cylinder2414_3.geometry}
          material={materials['Black Plastic.006']}
        />
        <mesh
          geometry={nodes.Cylinder2414_4.geometry}
          material={materials['Gold.001']}
        />
        <mesh
          geometry={nodes.Cylinder2414_5.geometry}
          material={materials['Piano Black With Fingerprints Plastic PL']}
        />
      </group>
      <group
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      >
        <mesh
          geometry={nodes.Cylinder2605.geometry}
          material={materials['Material.005']}
        />
        <mesh
          geometry={nodes.Cylinder2605_1.geometry}
          material={materials['Black Plastic.007']}
        />
        <mesh
          geometry={nodes.Cylinder2605_2.geometry}
          material={materials.basee}
        />
        <mesh
          geometry={nodes.Cylinder2605_3.geometry}
          material={materials['Black Plastic.006']}
        />
        <mesh
          geometry={nodes.Cylinder2605_4.geometry}
          material={materials['Gold.001']}
        />
        <mesh
          geometry={nodes.Cylinder2605_5.geometry}
          material={materials['Piano Black With Fingerprints Plastic PL']}
        />
      </group>
      <mesh
        geometry={nodes.lubricant_spray_tin004.geometry}
        material={materials.CAN}
        position={[1.946, 0.042, 1.032]}
      />
      <mesh
        geometry={nodes.cleaner_tin_01004.geometry}
        material={materials['Material.006']}
        position={[1.954, 0.158, -0.141]}
        scale={1.54}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials['Black Plastic.001']}
        position={[1.918, 1.769, 1.646]}
        scale={[0.128, 0.128, 0.472]}
      />
      <mesh
        geometry={nodes.Plane012.geometry}
        material={materials['Material.032']}
        position={[1.803, 1.766, 1.642]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.723}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials['Black Plastic.008']}
        position={[1.918, 1.769, -1.585]}
        scale={[0.128, 0.128, 0.472]}
      />
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials['Material.004']}
        position={[1.803, 1.766, -1.589]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.723}
      />
      <mesh
        geometry={nodes.BaseballV1.geometry}
        material={materials.BaseballV1Mat}
        position={[1.91, 1.201, -2.015]}
        rotation={[0, 1.571, 0]}
        scale={0.034}
      />
      <mesh
        geometry={nodes.TennisV1001.geometry}
        material={materials.TennisV1Mat}
        position={[1.91, 1.201, -1.703]}
        rotation={[0, 1.571, 0]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.TennisV2001.geometry}
        material={materials.TennisV2Mat}
        position={[1.91, 1.201, -1.857]}
        rotation={[0, 1.571, 0]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.BasketV1.geometry}
        material={materials.BasketV1Mat}
        position={[1.914, 0.919, -1.842]}
        scale={0.107}
      />
      <mesh
        geometry={nodes.AFootballV1001.geometry}
        material={materials.AFootballV1Mat}
        position={[2.013, 1.243, -2.81]}
        rotation={[0, 1.571, 0]}
        scale={0.128}
      />
      <mesh
        geometry={nodes.BaseballBatV1001.geometry}
        material={materials.BaseballBatV1Mat}
        position={[1.921, 1.603, -2.21]}
        rotation={[0.254, -0.007, -0.003]}
        scale={0.312}
      />
      <mesh
        geometry={nodes.BowlingV2.geometry}
        material={materials['BowlingV2Mat.001']}
        position={[1.901, 0.906, -2.799]}
        scale={0.109}
      />
      <mesh
        geometry={nodes.SoccerV1001.geometry}
        material={materials.SoccerV1Mat}
        position={[1.913, 0.465, -1.849]}
        scale={0.095}
      />
      <mesh
        geometry={nodes.SoccerV4.geometry}
        material={materials.SoccerV4Mat}
        position={[1.898, 0.471, -1.346]}
        scale={0.096}
      />
      <mesh
        geometry={nodes.TennisRacketV1.geometry}
        material={materials.TennisRacketV1Mat}
        position={[1.901, 1.697, -2.782]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.307}
      />
      <mesh
        geometry={nodes.VolleyballV1002.geometry}
        material={materials.VolleyballV1Mat}
        position={[1.924, 0.473, -2.328]}
        scale={0.102}
      />
      <mesh
        geometry={nodes.Cricket_Glove_Gloves_0.geometry}
        material={materials.Gloves}
        position={[1.909, 1.283, -1.336]}
        rotation={[0, -1.267, 0]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Barres_métal003.geometry}
        material={materials['RACK S']}
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
      <group
        position={[-0.858, 0.778, 0.052]}
        rotation={[-3.136, 0.003, 0]}
        scale={-0.779}
      >
        <mesh
          geometry={nodes['Group#211002'].geometry}
          material={materials['PaletteMaterial001.002']}
        />
        <mesh
          geometry={nodes['Group#211002_1'].geometry}
          material={materials['filterh2r.002']}
        />
        <mesh
          geometry={nodes['Group#211002_2'].geometry}
          material={materials['logoh2r2.002']}
        />
        <mesh
          geometry={nodes['Group#211002_3'].geometry}
          material={materials['exhausth2r.002']}
        />
        <mesh
          geometry={nodes['Group#211002_4'].geometry}
          material={materials['h2brckdisc.002']}
        />
        <mesh
          geometry={nodes['Group#211002_5'].geometry}
          material={materials['carbonh2r.002']}
        />
        <mesh
          geometry={nodes['Group#211002_6'].geometry}
          material={materials['Material.007']}
        />
      </group>
      <mesh
        geometry={nodes.BikerJacket_Leather_0002.geometry}
        material={materials['JACKET S']}
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
        geometry={nodes.JEANS_BACK_0002.geometry}
        material={materials['JEANS 2 S']}
        position={[0.444, 0.458, 1.474]}
        rotation={[3.008, -0.997, 3.04]}
        scale={[0.699, 0.829, 0.828]}
      />
      <mesh
        geometry={nodes.spoiler001.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <group
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      >
        <mesh
          geometry={nodes.Plane008.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.Plane008_1.geometry}
          material={materials['helmet base.001']}
        />
        <mesh
          geometry={nodes.Plane008_2.geometry}
          material={materials['PaletteMaterial002.001']}
        />
        <mesh
          geometry={nodes.Plane008_3.geometry}
          material={materials['PaletteMaterial003.001']}
        />
      </group>
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
      <mesh
        geometry={nodes.Bat_Bat1_0001.geometry}
        material={materials['Bat1.001']}
        position={[1.981, 0.079, -1.683]}
        rotation={[Math.PI / 2, 1.358, -Math.PI]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Hat_CricketEquipments_0001.geometry}
        material={materials['CricketEquipments.004']}
        position={[1.938, 1.444, -1.861]}
        rotation={[0, -0.804, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Helmet_CricketEquipments_0001.geometry}
        material={materials['CricketEquipments.005']}
        position={[1.927, 1.456, -1.317]}
        rotation={[-0.583, 0, 0]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Strap_CricketEquipments_0001.geometry}
        material={materials['CricketEquipments.003']}
        position={[1.92, 0.21, -2.772]}
        rotation={[-Math.PI / 2, -1.343, -Math.PI / 2]}
        scale={0.006}
      />
      <mesh
        geometry={nodes.Object_6003.geometry}
        material={materials['tv s']}
        position={[-0.179, 0.792, -2.558]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <group
        position={[-0.202, -0.008, -2.578]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.838}
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
          material={materials['comp_desk_top.001']}
        />
      </group>
      <mesh
        geometry={nodes.Object_7003.geometry}
        material={materials['material.002']}
        position={[0.273, 0.785, -2.465]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.04}
      />
      <mesh
        geometry={nodes.Plane018_button__0002.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0003.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0004.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0005.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0006.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0007.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0008.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0009.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane018_button__0367.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.466]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.headphone.geometry}
        material={materials['headphone s']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <group
        position={[-0.741, 0.752, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      >
        <mesh
          geometry={nodes.Plane018_button__0388_1.geometry}
          material={materials['PaletteMaterial001.003']}
        />
        <mesh
          geometry={nodes.Plane018_button__0388_2.geometry}
          material={materials['PaletteMaterial003.002']}
        />
      </group>
      <mesh
        geometry={nodes.Plane018_button__0395.geometry}
        material={materials['PaletteMaterial001.003']}
        position={[-0.741, 0.751, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.laptop.geometry}
        material={materials['laptop s']}
        position={[-0.741, 0.746, -2.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.056}
      />
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials['BACK WALL.001']}
        position={[-0.757, 1.469, -3.231]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.191, 1, 1.47]}
      />
    </group>
  )
}

useGLTF.preload('/glb TEST SHADERS.glb')
