/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function ClosedRoom (props) {
  const { nodes, materials } = useGLTF('/models/Room/closed-room.glb')
  return (
    <group {...props} dispose={null}>
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
        geometry={nodes.Curve011.geometry}
        material={materials['Shiny Metal']}
        position={[2.403, 2.407, 0.037]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.965, 2.181, 1.965]}
      />
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
        geometry={nodes.front_wall.geometry}
        material={materials.synthetic_wood}
        position={[2.416, 1.517, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.529, 13.787, 3.763]}
      />
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
        geometry={nodes.strips.geometry}
        material={materials['Lamp.001']}
        position={[-4.144, 0.002, 0]}
        scale={0.071}
      />
    </group>
  )
}

useGLTF.preload('/models/Room/closed-room.glb')
