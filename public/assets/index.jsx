import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { angleToRadians } from "../utils/angle";
import Group from "./Group";
import Arab from "./Arab";
import Backpack from "./Backpack";
import Bandana from "./Bandana";
import Boots from "./Boots";
import BootsAndGloves from "./BootsAndGloves";
import Helmet from "./Helmet";
import Jacket from "./Jacket";
import Jeans from "./Jeans";
import ManInJeans from "./ManInJeans";
import ManInSuit from "./ManInSuit";
import ManWithBag from "./ManWithBag";
import ManWithShirt from "./ManWithShirt";
import MotoGloves from "./MotoGloves";
import Shirt from "./Shirt";
import Sunglass from "./Sunglass";
import Tigerman from "./Tigerman";
import Yamaha from "./Yamaha";
const ModelViewer = ({
	modelProps,
	cameraPosition,
	groupPosition,
	modelIndex,
	setModelIndex,
	isRegisterPage,
	showModelPage,
}) => {
	const [models, setModels] = useState([]);
	// const controlsRef = useRef();
	useEffect(() => {
		const loadModels = async () => {
			try {
				const importedModels = await Promise.all(
					modelProps.map(async ({ modelName }) => {
						// console.log("modelName", modelName);
						// const { default: ImportedModel } = await import(`./${modelName}`);
						// return ImportedModel;
						switch (modelName) {
							case "Arab.jsx":
								return Arab;
							case "Backpack.jsx":
								return Backpack;
							case "Bandana.jsx":
								return Bandana;
							case "Boots.jsx":
								return Boots;
							case "BootsAndGloves.jsx":
								return BootsAndGloves;
							case "Helmet.jsx":
								return Helmet;
							case "Jacket.jsx":
								return Jacket;
							case "Jeans.jsx":
								return Jeans;
							case "ManInJeans.jsx":
								return ManInJeans;
							case "ManInSuit.jsx":
								return ManInSuit;
							case "ManWithBag.jsx":
								return ManWithBag;
							case "ManWithShirt.jsx":
								return ManWithShirt;
							case "MotoGloves.jsx":
								return MotoGloves;
							case "Shirt.jsx":
								return Shirt;
							case "Sunglass.jsx":
								return Sunglass;
							case "Tigerman.jsx":
								return Tigerman;
							case "Yamaha.jsx":
								return Yamaha;
							default:
								return "";
						}
					})
				);
				setModels(importedModels);
			} catch (error) {
				console.error("Error loading models:", error);
			}
		};
		loadModels();
	}, [modelProps]);
	if (models.length === 0) {
		return null;
	}
	return (
		<Canvas camera={{ position: cameraPosition }}>
			<Environment preset="city" />
			<ambientLight intensity={0.5} />
			<OrbitControls
				// ref={controlsRef}
				enablePan={false}
				enableZoom={false}
				enableRotate={showModelPage ?? false}
				rotateSpeed={1}
				maxPolarAngle={angleToRadians(87)}
				minPolarAngle={angleToRadians(87)}
			/>
			{models.length > 0 && (
				<Group
					models={models}
					modelProps={modelProps}
					groupPosition={groupPosition}
					modelIndex={modelIndex}
					setModelIndex={setModelIndex}
					isRegisterPage={isRegisterPage}
				/>
			)}
		</Canvas>
	);
};
export default ModelViewer;
