/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useNavigate } from 'react-router-dom'

export function Store (props) {
  const navigate = useNavigate()

  const { nodes, materials } = useGLTF('/models/Complete store.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials['Shiny Metal']}
        position={[2.399, 1.587, 0.01]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve011.geometry}
        material={materials['Shiny Metal']}
        position={[2.403, 2.407, 0.037]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.965, 2.181, 1.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front_wall.geometry}
        material={materials.synthetic_wood}
        position={[2.416, 1.517, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.529, 13.787, 3.763]}
      />
      <group
        position={[-1.57, 2.497, -0.585]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.627}
      >
        <group position={[0, 0.93, 1.372]} rotation={[0, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body.geometry}
            material={materials.plastic_matte_black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_1.geometry}
            material={nodes.body_1.material}
          />
        </group>
        <group position={[0, 0.98, 0]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_1.geometry}
            material={materials.Plastic_White_Rough}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_2.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.98, -1.904]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_1.geometry}
            material={materials.Plastic_White_Rough}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_2.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.98, -3.289]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_1.geometry}
            material={materials.Plastic_White_Rough}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_2.geometry}
            material={materials.emission}
          />
        </group>
        <group position={[0, 0.98, 1.372]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_1.geometry}
            material={materials.Plastic_White_Rough}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_2.geometry}
            material={materials.emission}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lampholder.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lampholder001.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, -1.904]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lampholder002.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, -3.289]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lampholder003.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.875, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mount001.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 0.79, -1.904]}
          rotation={[0, 0, Math.PI]}
        />
        <group position={[0, 0.861, -1.872]} rotation={[0, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mount017_1.geometry}
            material={materials['metals (aluminium)']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mount017_2.geometry}
            material={materials.rubber}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mount003.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 0.79, -3.289]}
          rotation={[0, 0, Math.PI]}
        />
        <group position={[0, 0.861, -3.257]} rotation={[0, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mount017_1.geometry}
            material={materials['metals (aluminium)']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mount017_2.geometry}
            material={materials.rubber}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mount005.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 0.79, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <group position={[0, 0.861, 1.404]} rotation={[0, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mount017_1.geometry}
            material={materials['metals (aluminium)']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mount017_2.geometry}
            material={materials.rubber}
          />
        </group>
        <group position={[0, 0.861, 0.032]} rotation={[0, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mount017_1.geometry}
            material={materials['metals (aluminium)']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mount017_2.geometry}
            material={materials.rubber}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mount018.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 0.79, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ring.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 1.103, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ring001.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 0.871, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ring002.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 0.871, -1.904]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ring003.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 1.103, -1.904]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ring004.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 0.871, -3.289]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ring005.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 1.103, -3.289]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ring006.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 0.871, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ring007.geometry}
          material={materials['metals (aluminium)']}
          position={[0, 1.103, 1.372]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rubber_ring001.geometry}
          material={materials.rubber}
          position={[0, 0.861, 0.037]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rubber_ring002.geometry}
          material={materials.rubber}
          position={[0, 0.861, 0.042]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rubber_ring003.geometry}
          material={materials.rubber}
          position={[0, 0.779, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rubber_ring004.geometry}
          material={materials.rubber}
          position={[0, 0.754, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rubber_ring005.geometry}
          material={materials.rubber}
          position={[0, 0.747, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rubber_ring006.geometry}
          material={materials.rubber}
          position={[0, 0.016, 0]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wire.geometry}
          material={materials.Plastic_White_Rough}
          position={[0, 0.78, 0]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Brick Wall']}
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
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.Rock}
          position={[-0.775, 0, -0.011]}
          scale={[3.191, 3.228, 3.226]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof.geometry}
        material={materials['Concrete 1']}
        position={[0, 2.938, 0]}
        scale={[3.946, 13.787, 3.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.strips.geometry}
        material={materials['Lamp.001']}
        position={[-0.112, 0.002, -0.027]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve012.geometry}
        material={materials['Fluorescent Lamp']}
        position={[-0.397, 0.676, -0.453]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.783}
      />
      <group
        position={[-0.106, -0.009, 0.007]}
        rotation={[0, 1.571, 0]}
        scale={1.018}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WoodenTable_03_body.geometry}
          material={materials.WoodenTable_03}
          position={[-0.004, 0.002, -0.015]}
          scale={1.057}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WoodenTable_03_drawer03.geometry}
          material={materials.WoodenTable_03}
          position={[0.21, 0.437, 0.281]}
        />
      </group>
      <group
        position={[-0.106, -0.009, 0.007]}
        rotation={[0, 1.571, 0]}
        scale={1.018}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WoodenTable_03_drawer02002.geometry}
          material={materials.WoodenTable_03}
          position={[0.412, 0.679, 0.281]}
        />
      </group>

      {/******************************** SMART PHONES *****************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()
          navigate('/products/category/Electronics', {
            state: {
              category: 'Electronics',
              item: 'smartphones'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s23Pluse_cream_mat_s23_cream_0.geometry}
          material={materials.mat_s23_cream}
          position={[-0.152, 1.037, 0.446]}
          rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
          scale={1.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s23Pluse_lavender_mat_s23_lavender_0.geometry}
          material={materials.mat_s23_lavender}
          position={[-0.151, 1.037, 0.253]}
          rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
          scale={1.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials['Scene_-_Root']}
          position={[-0.165, 0.925, 0.455]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2002.geometry}
          material={materials['Scene_-_Root']}
          position={[-0.165, 0.925, 0.264]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s23Pluse_cream_mat_s23_cream_0001.geometry}
          material={materials.mat_s23_cream}
          position={[-0.152, 1.037, -0.193]}
          rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
          scale={1.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s23Pluse_lavender_mat_s23_lavender_0001.geometry}
          material={materials.mat_s23_lavender}
          position={[-0.151, 1.037, -0.385]}
          rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
          scale={1.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2003.geometry}
          material={materials['Scene_-_Root']}
          position={[-0.165, 0.925, -0.183]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2004.geometry}
          material={materials['Scene_-_Root']}
          position={[-0.165, 0.925, -0.375]}
          scale={0.001}
        />
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buttons001.geometry}
        material={nodes.buttons001.material}
        position={[-0.108, 0.894, 1.757]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.JEANS_BACK_0003.geometry}
        material={materials['jeans.003']}
        position={[-0.038, 0.487, 1.827]}
        rotation={[3.016, -0.929, 3.068]}
        scale={[0.673, 0.834, 0.67]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lenses001.geometry}
        material={materials['Aviator Glasses.001']}
        position={[-0.107, 1.231, 1.753]}
        rotation={[-3.116, -0.772, -3.107]}
        scale={0.741}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['bandana white.001']}
        position={[-0.078, 1.148, 1.78]}
        rotation={[-1.577, 0.003, -2.439]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2009.geometry}
        material={materials['shoe.003']}
        position={[-0.052, 0.1, 1.818]}
        rotation={[-Math.PI / 2, 0, -2.462]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['bandana black.001']}
        position={[-0.058, 1.147, 1.804]}
        rotation={[-1.577, 0.003, -2.439]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['t-shirt001'].geometry}
        material={materials['cloth.001']}
        position={[-0.055, 0.883, 1.813]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mp001.geometry}
        material={materials.Tire}
        position={[-0.039, 0.696, 2.614]}
        rotation={[0, 0, -0.276]}
        scale={0.671}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mp002.geometry}
        material={materials.Tire}
        position={[-0.096, 0.217, 2.614]}
        rotation={[0, 0, 1.556]}
        scale={0.671}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mp004.geometry}
        material={materials.Tire}
        position={[0.109, 0.696, 2.614]}
        rotation={[0, 0, -0.276]}
        scale={0.671}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TireRack_low005.geometry}
        material={materials['Material #0']}
        position={[-0.098, 0.276, 2.613]}
        rotation={[0, -1.571, 0]}
        scale={[0.006, 0.005, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TireRack_low008.geometry}
        material={materials['Material #0']}
        position={[0.127, 0.244, 2.613]}
        rotation={[0, -1.571, 0]}
        scale={[0.006, 0.005, 0.004]}
      />
      <group
        position={[1.919, 1.303, 1.284]}
        rotation={[2.319, -0.262, -2.601]}
        scale={0.004}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Rough Iron Steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['Black Metal Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['Brushed aluminium']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['Car leather red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials['Leather.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials['Default.001']}
        />
      </group>
      <group
        position={[1.94, 1.303, 1.497]}
        rotation={[0.857, 0.358, 0.428]}
        scale={0.004}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Rough Iron Steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['Black Metal Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['Brushed aluminium']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['Car leather red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials['Leather.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials['Default.001']}
        />
      </group>
      <group
        position={[1.846, 1.303, 1.764]}
        rotation={[2.319, -0.262, -2.601]}
        scale={0.004}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Rough Iron Steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['Black Metal Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['Brushed aluminium']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['Car leather red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials['Leather.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials['Default.001']}
        />
      </group>
      <group
        position={[1.94, 1.303, 1.977]}
        rotation={[0.857, 0.358, 0.428]}
        scale={0.004}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Rough Iron Steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['Black Metal Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['Brushed aluminium']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['Car leather red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials['Leather.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials['Default.001']}
        />
      </group>
      <group
        position={[1.919, 1.303, 2.316]}
        rotation={[2.319, -0.262, -2.601]}
        scale={0.004}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Rough Iron Steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['Black Metal Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['Brushed aluminium']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['Car leather red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials['Leather.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials['Default.001']}
        />
      </group>
      <group
        position={[1.94, 1.303, 2.529]}
        rotation={[0.857, 0.358, 0.428]}
        scale={0.004}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Rough Iron Steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['Black Metal Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['Brushed aluminium']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['Car leather red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials['Leather.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials['Default.001']}
        />
      </group>
      <group
        position={[1.919, 1.303, 2.792]}
        rotation={[2.319, -0.262, -2.601]}
        scale={0.004}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Rough Iron Steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['Black Metal Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['Brushed aluminium']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['Car leather red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials['Leather.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials['Default.001']}
        />
      </group>
      <group
        position={[1.94, 1.303, 3.005]}
        rotation={[0.857, 0.358, 0.428]}
        scale={0.004}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Rough Iron Steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['Black Metal Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['Brushed aluminium']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['Car leather red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials['Leather.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials['Default.001']}
        />
      </group>
      <group
        position={[2.187, 0.315, 1.421]}
        rotation={[-Math.PI / 2, 0, -1.574]}
        scale={0.011}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2006.geometry}
          material={materials['wire_177028149.003']}
          position={[2.436, -22.536, 42.596]}
          scale={0.908}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2007.geometry}
          material={materials['wire_177028149.003']}
          position={[45.139, -22.381, 42.596]}
          scale={0.908}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2008.geometry}
          material={materials['wire_177028149.003']}
          position={[86.782, -22.229, 42.596]}
          scale={0.908}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2010.geometry}
          material={materials['wire_177028149.003']}
          position={[129.484, -22.073, 42.596]}
          scale={0.908}
        />
      </group>
      <group
        position={[1.86, 0.614, 1.383]}
        rotation={[Math.PI / 2, 0, 0.78]}
        scale={0.039}
      >
        <group position={[0.61, -0.604, 0]} rotation={[0, 0, 0.78]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh009.geometry}
            material={materials['Black Plastic.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh009_1.geometry}
            material={materials['Gray white plastic']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh009_2.geometry}
            material={materials['Material.001']}
          />
        </group>
      </group>
      <group
        position={[1.86, 0.614, 2.423]}
        rotation={[Math.PI / 2, 0, 0.78]}
        scale={0.039}
      >
        <group position={[0.61, -0.604, 0]} rotation={[0, 0, 0.78]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh009.geometry}
            material={materials['Black Plastic.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh009_1.geometry}
            material={materials['Gray white plastic']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh009_2.geometry}
            material={materials['Material.001']}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.841, 0.6, 1.92]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.841, 0.6, 1.92]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.841, 0.6, 1.92]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.871, 0.571, 1.901]}
        rotation={[-Math.PI, Math.PI / 4, -1.555]}
        scale={0.129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve005.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.826, 0.602, 1.901]}
        rotation={[-Math.PI, Math.PI / 4, 1.557]}
        scale={0.129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve006.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.841, 0.6, 2.907]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.841, 0.6, 2.907]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.841, 0.6, 2.907]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve009.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.871, 0.571, 2.888]}
        rotation={[-Math.PI, Math.PI / 4, -1.555]}
        scale={0.129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials['Gray white plastic.001']}
        position={[1.826, 0.602, 2.888]}
        rotation={[-Math.PI, Math.PI / 4, 1.557]}
        scale={0.129}
      />
      <group
        position={[1.853, 0.605, 1.9]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube12002.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube3.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube8.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface4.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
      </group>
      <group
        position={[1.853, 0.605, 2.887]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube12003.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube3001.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube8001.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface4001.geometry}
          material={materials['Black Plastic.003']}
          rotation={[0, 0, Math.PI / 4]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base011.geometry}
        material={materials.base}
        position={[1.922, 1.499, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw001.geometry}
        material={materials['Black Plastic.004']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw002.geometry}
        material={materials['Black Plastic.005']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw005.geometry}
        material={materials['glass.001']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw006.geometry}
        material={materials['Material.002']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw007.geometry}
        material={materials.red}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw008.geometry}
        material={materials.red}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw009.geometry}
        material={materials['Black Plastic.005']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw010.geometry}
        material={materials['Black Plastic.005']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw011.geometry}
        material={materials['Material.003']}
        position={[1.922, 1.495, 1.444]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base001.geometry}
        material={materials.base}
        position={[1.922, 1.499, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw012.geometry}
        material={materials['Black Plastic.004']}
        position={[1.922, 1.495, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw013.geometry}
        material={materials['Black Plastic.005']}
        position={[1.922, 1.495, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw014.geometry}
        material={materials['glass.001']}
        position={[1.922, 1.495, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw015.geometry}
        material={materials['Material.002']}
        position={[1.922, 1.495, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw016.geometry}
        material={materials.red}
        position={[1.922, 1.495, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw017.geometry}
        material={materials.red}
        position={[1.922, 1.495, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw018.geometry}
        material={materials['Black Plastic.005']}
        position={[1.922, 1.495, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw019.geometry}
        material={materials['Black Plastic.005']}
        position={[1.922, 1.495, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw020.geometry}
        material={materials['Material.003']}
        position={[1.922, 1.495, 2.486]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.239}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base003.geometry}
        material={materials.basee}
        position={[1.905, 1.499, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw021.geometry}
        material={materials['Black Plastic.006']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw022.geometry}
        material={materials['Black Plastic.007']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw023.geometry}
        material={materials['Piano Black With Fingerprints Plastic PL']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw024.geometry}
        material={materials['Piano Black With Fingerprints Plastic PL']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw025.geometry}
        material={materials['Gold.001']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw026.geometry}
        material={materials['Material.005']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw027.geometry}
        material={materials['Material.005']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw028.geometry}
        material={materials['Black Plastic.007']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw029.geometry}
        material={materials['Black Plastic.007']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw030.geometry}
        material={materials['Black Plastic.006']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw031.geometry}
        material={materials['Material.005']}
        position={[1.905, 1.495, 1.903]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base004.geometry}
        material={materials.basee}
        position={[1.905, 1.499, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw032.geometry}
        material={materials['Black Plastic.006']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw033.geometry}
        material={materials['Black Plastic.007']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw034.geometry}
        material={materials['Piano Black With Fingerprints Plastic PL']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw035.geometry}
        material={materials['Piano Black With Fingerprints Plastic PL']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw036.geometry}
        material={materials['Gold.001']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw037.geometry}
        material={materials['Material.005']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw038.geometry}
        material={materials['Material.005']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw039.geometry}
        material={materials['Black Plastic.007']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw040.geometry}
        material={materials['Black Plastic.007']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw041.geometry}
        material={materials['Black Plastic.006']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw042.geometry}
        material={materials['Material.005']}
        position={[1.905, 1.495, 2.871]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cleaner_tin_01.geometry}
        material={materials.cleaner_tin_01}
        position={[1.954, 0.158, 1.341]}
        scale={1.54}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lubricant_spray_tin.geometry}
        material={materials.lubricant_spray}
        position={[1.946, 0.042, 1.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cleaner_tin_01001.geometry}
        material={materials.cleaner_tin_01}
        position={[1.954, 0.158, 1.807]}
        scale={1.54}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lubricant_spray_tin001.geometry}
        material={materials.lubricant_spray}
        position={[1.946, 0.042, 1.933]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cleaner_tin_01002.geometry}
        material={materials.cleaner_tin_01}
        position={[1.954, 0.158, 2.389]}
        scale={1.54}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lubricant_spray_tin002.geometry}
        material={materials.lubricant_spray}
        position={[1.946, 0.042, 2.509]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cleaner_tin_01003.geometry}
        material={materials.cleaner_tin_01}
        position={[1.954, 0.158, 2.822]}
        scale={1.54}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lubricant_spray_tin003.geometry}
        material={materials.lubricant_spray}
        position={[1.946, 0.042, 2.954]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube125.geometry}
        material={materials['Black Plastic.008']}
        position={[1.918, 1.769, -1.582]}
        scale={[0.128, 0.128, 0.472]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane201.geometry}
        material={materials['Material.032']}
        position={[1.803, 1.766, -1.586]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.723}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['Black Plastic.008']}
        position={[1.918, 1.769, 1.646]}
        scale={[0.128, 0.128, 0.472]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials['Material.032']}
        position={[1.803, 1.766, 1.642]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.723}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BaseballV1.geometry}
        material={materials.BaseballV1Mat}
        position={[1.91, 1.201, -2.015]}
        rotation={[0, 1.571, 0]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BaseballV1001.geometry}
        material={materials.BaseballV1Mat}
        position={[1.91, 1.201, -1.939]}
        rotation={[0, 1.571, 0]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisV1.geometry}
        material={materials.TennisV1Mat}
        position={[1.91, 1.201, -1.633]}
        rotation={[0, 1.571, 0]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisV1001.geometry}
        material={materials.TennisV1Mat}
        position={[1.91, 1.201, -1.703]}
        rotation={[0, 1.571, 0]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisV2.geometry}
        material={materials.TennisV2Mat}
        position={[1.91, 1.201, -1.782]}
        rotation={[0, 1.571, 0]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisV2001.geometry}
        material={materials.TennisV2Mat}
        position={[1.91, 1.201, -1.857]}
        rotation={[0, 1.571, 0]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasketV1.geometry}
        material={materials.BasketV1Mat}
        position={[1.914, 0.919, -1.842]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasketV1001.geometry}
        material={materials.BasketV1Mat}
        position={[1.914, 0.484, -2.786]}
        scale={0.11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AFootballV1.geometry}
        material={materials.AFootballV1Mat}
        position={[2.013, 0.882, -2.377]}
        rotation={[0, 1.571, 0]}
        scale={0.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AFootballV1001.geometry}
        material={materials.AFootballV1Mat}
        position={[2.013, 1.243, -2.81]}
        rotation={[0, 1.571, 0]}
        scale={0.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BaseballBatV1.geometry}
        material={materials.BaseballBatV1Mat}
        position={[1.921, 1.603, -2.364]}
        rotation={[0.254, -0.007, -0.003]}
        scale={0.312}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BaseballBatV1001.geometry}
        material={materials.BaseballBatV1Mat}
        position={[1.921, 1.603, -2.21]}
        rotation={[0.254, -0.007, -0.003]}
        scale={0.312}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BowlingV2.geometry}
        material={materials['BowlingV2Mat.001']}
        position={[1.901, 0.906, -2.799]}
        scale={0.109}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SoccerV1.geometry}
        material={materials.SoccerV1Mat}
        position={[1.913, 1.259, -2.363]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SoccerV1001.geometry}
        material={materials.SoccerV1Mat}
        position={[1.913, 0.465, -1.849]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SoccerV4.geometry}
        material={materials.SoccerV4Mat}
        position={[1.898, 0.471, -1.346]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisRacketV1.geometry}
        material={materials.TennisRacketV1Mat}
        position={[1.901, 1.697, -2.782]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.307}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TennisRacketV1001.geometry}
        material={materials.TennisRacketV1Mat}
        position={[1.901, 1.697, -2.769]}
        rotation={[-0.271, Math.PI / 2, 0]}
        scale={0.307}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VolleyballV1.geometry}
        material={materials.VolleyballV1Mat}
        position={[1.924, 0.905, -1.354]}
        scale={0.102}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VolleyballV1001.geometry}
        material={materials.VolleyballV1Mat}
        position={[1.924, 0.473, -2.338]}
        scale={0.102}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cricket_Glove_Gloves_0.geometry}
        material={materials.Gloves}
        position={[1.909, 1.283, -1.336]}
        rotation={[0, -1.267, 0]}
        scale={0.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barres_métal001.geometry}
        material={materials.PaletteMaterial002}
        position={[1.934, 0, -2.545]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barres_métal003.geometry}
        material={materials.PaletteMaterial002}
        position={[1.934, 0, 1.644]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barres_métal004.geometry}
        material={materials.PaletteMaterial002}
        position={[1.934, 0, 2.613]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barres_métal007.geometry}
        material={materials.PaletteMaterial002}
        position={[1.934, 0, -1.58]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poignée_métal_noir001.geometry}
        material={materials.PaletteMaterial003}
        position={[1.934, 0, -2.545]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poignée_métal_noir003.geometry}
        material={materials.PaletteMaterial003}
        position={[1.934, 0, 1.644]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poignée_métal_noir004.geometry}
        material={materials.PaletteMaterial003}
        position={[1.934, 0, 2.613]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poignée_métal_noir007.geometry}
        material={materials.PaletteMaterial003}
        position={[1.934, 0, -1.58]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.953}
      />

      {/************************ BIKE *************************/}
      <group
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
              item: 'bike'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557013001'].geometry}
          material={materials['logoh2r2.002']}
          position={[-0.982, 0.478, -0.01]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557022001'].geometry}
          material={materials['filterh2r.002']}
          position={[-0.88, 0.374, 0.338]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557202002'].geometry}
          material={materials['exhausth2r.002']}
          position={[-1.022, 0.274, -0.311]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557247002'].geometry}
          material={materials['h2brckdisc.002']}
          position={[-0.862, 0.266, -0.527]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.818}
        />
        <group
          position={[-0.88, 0.266, -0.527]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557256002'].geometry}
            material={materials['treadh2r.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['G-__557256002_1'].geometry}
            material={materials['tireh2r.002']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557355003'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.86, 0.233, -0.199]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557355004'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.861, 0.233, -0.199]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557418001'].geometry}
          material={materials['carbonh2r.002']}
          position={[-0.884, 0.662, 0.579]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557445003'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.944, 0.222, 0.601]}
          rotation={[2.988, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557445004'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.823, 0.222, 0.601]}
          rotation={[-0.153, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557454003'].geometry}
          material={materials['h2brckdisc.002']}
          position={[-0.947, 0.223, 0.602]}
          rotation={[2.988, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['G-__557454004'].geometry}
          material={materials['h2brckdisc.002']}
          position={[-0.821, 0.223, 0.602]}
          rotation={[-0.153, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211006'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.858, 0.778, 0.052]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211007'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.835, 0.778, 0.107]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211008'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.882, 0.778, 0.142]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211009'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.929, 0.778, 0.107]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#211010'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.906, 0.778, 0.052]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#213003'].geometry}
          material={materials['carbonh2r.002']}
          position={[-0.771, 0.595, 0.613]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#213004'].geometry}
          material={materials['carbonh2r.002']}
          position={[-0.997, 0.595, 0.612]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#214003'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.8, 0.551, -0.108]}
          rotation={[-0.739, 0.408, 0.034]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#214004'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.963, 0.551, -0.108]}
          rotation={[2.4, 0.412, 0.038]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215048'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.673, 0.42, 0.374]}
          rotation={[0.458, -0.624, 1.578]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215049'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.708, 0.39, 0.211]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215050'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.699, 0.395, 0.145]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.409}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215051'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.094, 0.42, 0.373]}
          rotation={[-2.686, -0.618, 1.574]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215052'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.057, 0.39, 0.21]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215053'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.066, 0.395, 0.143]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.409}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215054'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.063, 0.574, 0.306]}
          rotation={[-0.729, 0.226, -1]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215055'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.811, 0.745, 0.215]}
          rotation={[-2.516, -0.355, 2.018]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215056'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.907, 0.607, -0.434]}
          rotation={[-2.555, 1.259, -1.577]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215057'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.88, 0.544, -0.338]}
          rotation={[-2.555, 1.259, -1.577]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215058'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.116, 0.563, 0.373]}
          rotation={[2.525, 0.097, -0.128]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215059'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.972, 0.572, -0.38]}
          rotation={[2.308, 1.063, -0.191]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215060'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.099, 0.547, 0.449]}
          rotation={[2.554, 0.226, -0.316]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215061'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.076, 0.527, 0.53]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215062'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.05, 0.646, 0.146]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215063'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.825, 0.693, 0.309]}
          rotation={[-2.065, -0.478, 2.214]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215064'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.992, 0.702, -0.502]}
          rotation={[2.557, 1.111, 0.314]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215065'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.769, 0.702, -0.501]}
          rotation={[-0.577, 1.106, 0.307]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215066'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.79, 0.572, -0.38]}
          rotation={[-0.826, 1.059, -0.201]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215067'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.94, 0.693, 0.308]}
          rotation={[1.079, -0.481, 2.22]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215068'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.954, 0.745, 0.214]}
          rotation={[0.627, -0.36, 2.022]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215069'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.854, 0.607, -0.434]}
          rotation={[0.576, 1.254, -1.565]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215070'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.715, 0.646, 0.147]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215071'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.65, 0.563, 0.374]}
          rotation={[-0.616, 0.091, -0.132]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215072'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.668, 0.547, 0.45]}
          rotation={[-0.586, 0.221, -0.32]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215073'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.691, 0.527, 0.531]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215074'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.753, 0.378, -0.377]}
          rotation={[-0.512, 0.085, 0.335]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215075'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.754, 0.389, -0.295]}
          rotation={[-0.43, -0.171, 0.228]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215076'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.744, 0.292, -0.278]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215077'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.766, 0.255, -0.428]}
          rotation={[-0.385, -0.342, 0.273]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215078'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.012, 0.262, -0.13]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215079'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.756, 0.31, -0.185]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215080'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.009, 0.318, -0.109]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215081'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.008, 0.315, -0.169]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215082'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.752, 0.327, -0.141]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215083'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.782, 0.234, -0.033]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215084'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.748, 0.318, -0.111]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215085'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.763, 0.243, -0.085]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215086'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.009, 0.349, -0.155]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215087'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.981, 0.359, 0.582]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215088'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.981, 0.285, 0.614]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215089'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.787, 0.285, 0.615]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215090'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.787, 0.359, 0.583]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215091'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.028, 0.731, 0.53]}
          rotation={[-2.605, -0.475, 1.879]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215092'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.023, 0.72, 0.555]}
          rotation={[-2.605, -0.475, 1.879]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215093'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.739, 0.731, 0.531]}
          rotation={[0.539, -0.48, 1.883]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#215094'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.745, 0.72, 0.556]}
          rotation={[0.539, -0.48, 1.883]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#217005'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.907, 0.642, -0.473]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#217006'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.903, 0.666, -0.504]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#217007'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.854, 0.642, -0.473]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#217008'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.858, 0.666, -0.504]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#218003'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.073, 0.483, 0.442]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#218004'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.694, 0.483, 0.443]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#222003'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.791, 0.667, -0.438]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#222004'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.97, 0.667, -0.438]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#228005'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.007, 0.68, 0.376]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#228006'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.76, 0.68, 0.377]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#228007'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.699, 0.375]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#228008'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.753, 0.699, 0.376]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#231003'].geometry}
          material={materials['logoh2r2.002']}
          position={[-0.999, 0.679, -0.422]}
          rotation={[-1.293, 0.485, 1.571]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#231004'].geometry}
          material={materials['logoh2r2.002']}
          position={[-0.763, 0.692, -0.453]}
          rotation={[1.848, 0.452, -1.571]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#234003'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.985, 0.459, -0.03]}
          rotation={[1.576, 0, 1.574]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#234004'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.986, 0.498, 0.009]}
          rotation={[1.576, 0, 1.574]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#243003'].geometry}
          material={materials['Material.007']}
          position={[-0.704, 0.358, 0.275]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#243004'].geometry}
          material={materials['Material.007']}
          position={[-1.061, 0.358, 0.274]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250019'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.978, 0.46, 0.074]}
          rotation={[-3.136, 0.003, 1.571]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250020'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.987, 0.454, -0.05]}
          rotation={[-3.136, 0.003, 1.571]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250021'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.99, 0.451, -0.018]}
          rotation={[-3.136, 0.003, 1.571]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250022'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.981, 0.455, 0.025]}
          rotation={[-3.136, 0.003, 1.571]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250023'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.412, -0.031]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250024'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.369, -0.056]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250025'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.33, -0.061]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250026'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.278, -0.073]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250027'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.229, -0.061]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250028'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.217, 0.011]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250029'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.255, 0.056]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250030'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.271, 0.148]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250031'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.316, 0.188]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250032'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.436, 0.018]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250033'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.435, 0.069]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250034'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.426, 0.117]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250035'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.361, 0.201]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#250036'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.014, 0.388, 0.157]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251012'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.732, 0.311, 0.068]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251013'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.732, 0.256, 0.097]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251014'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.732, 0.263, 0.168]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251015'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.734, 0.342, 0.193]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251016'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.733, 0.358, 0.173]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251017'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.733, 0.368, 0.139]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251018'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.732, 0.363, 0.1]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251019'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.783, 0.394, -0.035]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251020'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.762, 0.335, 0.042]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251021'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.762, 0.378, 0.048]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#251022'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.762, 0.38, 0.028]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252009'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.959, 0.778, 0.491]}
          rotation={[0.797, 0.036, 2.239]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252010'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.936, 0.75, 0.54]}
          rotation={[0.797, 0.036, 2.239]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252011'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.98, 0.81, 0.439]}
          rotation={[0.785, 0.126, 2.39]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252012'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.999, 0.842, 0.388]}
          rotation={[0.912, 0.012, 2.429]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252013'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.831, 0.75, 0.54]}
          rotation={[-2.344, 0.04, 2.235]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252014'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.768, 0.842, 0.389]}
          rotation={[-2.229, 0.016, 2.424]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252015'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.808, 0.778, 0.492]}
          rotation={[-2.344, 0.04, 2.235]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#252016'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.787, 0.81, 0.44]}
          rotation={[-2.356, 0.13, 2.385]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#266003'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.696, 0.404, 0.169]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#266004'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.069, 0.404, 0.168]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#280003'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.795, 0.417, 0.521]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#280004'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.972, 0.417, 0.52]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281031'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.95, 0.229, 0.693]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281032'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.948, 0.278, 0.636]}
          rotation={[1.89, 0.001, 0.003]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281033'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.948, 0.272, 0.56]}
          rotation={[0.634, -0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281034'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.948, 0.198, 0.542]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281035'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.948, 0.158, 0.607]}
          rotation={[-1.879, 0.001, -0.003]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281036'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.948, 0.207, 0.665]}
          rotation={[-3.136, 0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281037'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.949, 0.271, 0.525]}
          rotation={[0.634, -0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281038'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.95, 0.307, 0.568]}
          rotation={[1.262, -0.001, 0.003]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281039'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.95, 0.311, 0.624]}
          rotation={[1.89, 0.001, 0.003]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281040'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.95, 0.281, 0.672]}
          rotation={[2.519, 0.003, 0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281041'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.95, 0.164, 0.532]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281042'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.949, 0.216, 0.511]}
          rotation={[0.006, -0.003, 0]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281043'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.95, 0.138, 0.636]}
          rotation={[-1.879, 0.001, -0.003]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281044'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.95, 0.134, 0.58]}
          rotation={[-1.251, -0.001, -0.003]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281045'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.95, 0.174, 0.679]}
          rotation={[-2.508, 0.003, -0.002]}
          scale={-0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281046'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.229, 0.693]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281047'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.82, 0.278, 0.636]}
          rotation={[-1.251, -0.001, -0.003]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281048'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.82, 0.272, 0.56]}
          rotation={[-2.508, 0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281049'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.82, 0.198, 0.543]}
          rotation={[2.519, 0.003, 0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281050'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.82, 0.158, 0.607]}
          rotation={[1.262, -0.001, 0.003]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281051'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.82, 0.207, 0.665]}
          rotation={[0.006, -0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281052'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.271, 0.525]}
          rotation={[-2.508, 0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281053'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.307, 0.568]}
          rotation={[-1.879, 0.001, -0.003]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281054'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.311, 0.624]}
          rotation={[-1.251, -0.001, -0.003]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281055'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.281, 0.672]}
          rotation={[-0.623, -0.003, -0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281056'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.164, 0.533]}
          rotation={[2.519, 0.003, 0.002]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281057'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.216, 0.512]}
          rotation={[-3.136, 0.003, 0]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281058'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.138, 0.636]}
          rotation={[1.262, -0.001, 0.003]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281059'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.134, 0.58]}
          rotation={[1.89, 0.001, 0.003]}
          scale={0.779}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#281060'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.818, 0.174, 0.68]}
          rotation={[0.634, -0.003, 0.002]}
          scale={0.779}
        />
        <group
          position={[-1.008, 0.724, 0.147]}
          rotation={[1.778, -0.864, 1.673]}
          scale={0.037}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Kawasaki#3005'].geometry}
            material={materials['PaletteMaterial001.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Kawasaki#3005_1'].geometry}
            material={materials['Material.007']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3009'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.762, 0.732, 0.069]}
          rotation={[1.806, 0.671, -1.649]}
          scale={0.037}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3010'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.007, 0.717, 0.171]}
          rotation={[1.778, -0.864, 1.673]}
          scale={0.037}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3011'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.001, 0.722, 0.172]}
          rotation={[1.778, -0.864, 1.673]}
          scale={0.037}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3012'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.767, 0.738, 0.071]}
          rotation={[1.806, 0.671, -1.649]}
          scale={0.037}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3013'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-1.007, 0.72, 0.162]}
          rotation={[1.778, -0.864, 1.673]}
          scale={0.037}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Kawasaki#3014'].geometry}
          material={materials['PaletteMaterial001.002']}
          position={[-0.76, 0.732, 0.079]}
          rotation={[1.806, 0.671, -1.649]}
          scale={0.037}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base005.geometry}
        material={materials['helmet base.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BikerJacket_Leather_0002.geometry}
        material={materials['jacket main.001']}
        position={[0.446, 0.953, 1.472]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.009, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BikerJacket_Metals_0002.geometry}
        material={materials['jacket button.001']}
        position={[0.384, 0.876, 1.379]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.009, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.JEANS_BACK_0002.geometry}
        material={materials['jeans.002']}
        position={[0.444, 0.458, 1.474]}
        rotation={[3.008, -0.997, 3.04]}
        scale={[0.699, 0.829, 0.828]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2011.geometry}
        material={materials['shoe.002']}
        position={[0.413, 0.102, 1.459]}
        rotation={[-Math.PI / 2, 0, -2.343]}
        scale={0.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.spoiler001.geometry}
        material={materials['PaletteMaterial003.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer001.geometry}
        material={materials.PaletteMaterial001}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vizer_Screw043.geometry}
        material={materials['PaletteMaterial002.001']}
        position={[0.432, 1.213, 1.469]}
        rotation={[Math.PI, -0.891, Math.PI]}
        scale={0.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bat_Bat1_0.geometry}
        material={materials['Bat1.001']}
        position={[1.854, 0.079, -1.683]}
        rotation={[Math.PI / 2, 1.358, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bat_Bat1_0001.geometry}
        material={materials['Bat1.001']}
        position={[1.981, 0.079, -1.683]}
        rotation={[Math.PI / 2, 1.358, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hat_CricketEquipments_0001.geometry}
        material={materials['CricketEquipments.004']}
        position={[1.938, 1.444, -1.861]}
        rotation={[0, -0.804, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Helmet_CricketEquipments_0001.geometry}
        material={materials['CricketEquipments.005']}
        position={[1.927, 1.456, -1.317]}
        rotation={[-0.583, 0, 0]}
        scale={0.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Strap_CricketEquipments_0001.geometry}
        material={materials['CricketEquipments.003']}
        position={[1.92, 0.21, -2.772]}
        rotation={[-Math.PI / 2, -1.343, -Math.PI / 2]}
        scale={0.006}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Strap_CricketEquipments_0002.geometry}
        material={materials['CricketEquipments.003']}
        position={[1.92, 0.21, -2.273]}
        rotation={[-Math.PI / 2, -1.343, -Math.PI / 2]}
        scale={0.006}
      />

      {/******************************* SETUP ******************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          navigate('/products/category/Electronics', {
            state: {
              category: 'Electronics',
              item: '',
              playVideo: true
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.head_band001.geometry}
          material={materials['Fine leather black.001']}
          position={[-0.499, 0.776, -2.297]}
          rotation={[-1.884, 0.144, -0.418]}
          scale={1.059}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Headphone_Stand_Aluminum001.geometry}
          material={materials['PaletteMaterial003.002']}
          position={[-0.488, 0.669, -2.365]}
          rotation={[0, -0.018, 0]}
          scale={0.893}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.logo001.geometry}
          material={materials['PaletteMaterial002.002']}
          position={[-0.499, 0.776, -2.297]}
          rotation={[-1.884, 0.144, -0.418]}
          scale={1.059}
        />
        <group
          position={[-0.179, 0.792, -2.558]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.05}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4002.geometry}
            material={materials['monitor.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4002_1.geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[-0.202, -0.008, -2.578]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.838}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_1.geometry}
            material={materials['comp_desk_b.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_2.geometry}
            material={materials['comp_desk.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_3.geometry}
            material={materials['comp_desk_a.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_4.geometry}
            material={materials['comp_desk_c.001']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7003.geometry}
          material={materials['material.002']}
          position={[0.273, 0.785, -2.465]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7004.geometry}
          material={materials.PaletteMaterial004}
          position={[0.288, 0.977, -2.496]}
          rotation={[-Math.PI / 2, 0, -0.736]}
          scale={0.002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14001.geometry}
          material={materials['comp_desk_top.001']}
          position={[-0.198, 0.598, -2.484]}
          scale={0.838}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_red_text__0001.geometry}
          material={materials['red_text.001']}
          position={[-0.741, 0.633, -2.545]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.122}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_body__0001.geometry}
          material={materials['body.001']}
          position={[-0.741, 0.751, -2.497]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.056}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_scareen__0001.geometry}
          material={materials['scareen.001']}
          position={[-0.741, 0.751, -2.497]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.056}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018_button__0001.geometry}
          material={materials['PaletteMaterial001.003']}
          position={[-0.741, 0.751, -2.497]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.056}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_text__0001.geometry}
          material={materials['text.001']}
          position={[-0.741, 0.646, -2.631]}
          rotation={[-1.622, 0, 0]}
          scale={0.122}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/Complete store.glb')
