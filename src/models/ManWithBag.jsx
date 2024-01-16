/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\models\Man with bag\scene.gltf -o .\src\models\ManWithBag.jsx -k -T
Author: 3DFarm (https://sketchfab.com/3dfarm)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/man-with-bag-0711-8e108ae01f29484688d0313aa5a0f31b
Title: Man with bag 0711
*/

import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = forwardRef((props, ref) => {
	const { nodes, materials } = useGLTF("/models/Man with bag/scene-transformed.glb");
	return (
		<group ref={ref} {...props} dispose={null} name="ManWithBag.jsx">
			<mesh
				name="Object_2"
				geometry={nodes.Object_2.geometry}
				material={materials.texture_Body}
				position={[-318.449, -114.172, 374.34]}
				rotation={[-1.595, 0, 0]}
			/>
			<mesh
				name="Object_8"
				geometry={nodes.Object_8.geometry}
				material={materials.texture_Clock}
				position={[-318.449, -114.172, 374.34]}
				rotation={[-1.595, 0, 0]}
			/>
			<mesh
				name="Object_9"
				geometry={nodes.Object_9.geometry}
				material={materials.texture_Hand}
				position={[-318.449, -114.172, 374.34]}
				rotation={[-1.595, 0, 0]}
			/>
		</group>
	);
});

useGLTF.preload("/models/Man with bag/scene-transformed.glb");

export default Model;
