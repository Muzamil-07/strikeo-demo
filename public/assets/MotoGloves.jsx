/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 .\public\models\Moto gloves\scene.gltf -o .\src\models\MotoGloves.jsx -k -T
Author: omegadarling (https://sketchfab.com/omegadarling)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/black-tactical-glove-a8154ae7ae8f45e6a4e8b5cfd5d85706
Title: Black Tactical Glove
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF("/models/Moto gloves/scene-transformed.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				name="BTG_RC01_ZB05_BTG_RC01_ZB05_0"
				geometry={nodes.BTG_RC01_ZB05_BTG_RC01_ZB05_0.geometry}
				material={materials.BTG_RC01_ZB05}
			/>
		</group>
	);
}

useGLTF.preload("/models/Moto gloves/scene-transformed.glb");
