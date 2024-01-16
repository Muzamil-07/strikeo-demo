import React, { Suspense, useRef } from "react";
import useDrag from "../hooks/onDrag";
import { gsap } from "gsap";
import positions from "../data/positions";

const Group = ({ models, modelProps, groupPosition, modelIndex, setModelIndex, isRegisterPage }) => {
	const groupRef = useRef(null);

	const modelRefs = models.map(() => useRef(null));

	const { isDragging } = useDrag((movementX) => {
		// console.log(movementX, "movementX", modelIndex, "modelIndex");
		if (Math.abs(movementX) > 5) {
			if (groupRef.current && isRegisterPage) {
				// console.log(modelRefs, "modelRefs", modelIndex);
				let animations = [];
				modelRefs.forEach((ref, index) => {
					const positionAnime = gsap.to(ref.current.position, {
						x: positions[
							movementX < 0
								? modelIndex
								: modelIndex === 0
								? 5
								: modelIndex === 5
								? 3
								: modelIndex === 4
								? 2
								: modelIndex === 3
								? 1
								: modelIndex === 2
								? 0
								: modelIndex === 1
								? 5
								: modelIndex
						][ref.current.name].modelPosition[0],
						y: positions[
							movementX < 0
								? modelIndex
								: modelIndex === 0
								? 5
								: modelIndex === 5
								? 3
								: modelIndex === 4
								? 2
								: modelIndex === 3
								? 1
								: modelIndex === 2
								? 0
								: modelIndex === 1
								? 5
								: modelIndex
						][ref.current.name].modelPosition[1],
						z: positions[
							movementX < 0
								? modelIndex
								: modelIndex === 0
								? 5
								: modelIndex === 5
								? 3
								: modelIndex === 4
								? 2
								: modelIndex === 3
								? 1
								: modelIndex === 2
								? 0
								: modelIndex === 1
								? 5
								: modelIndex
						][ref.current.name].modelPosition[2],
						duration: 3,
						ease: "power2.in",
						// onComplete: () => {},
					});
					const scaleAnime = gsap.to(ref.current.scale, {
						x: positions[
							movementX < 0
								? modelIndex
								: modelIndex === 0
								? 4
								: modelIndex === 5
								? 3
								: modelIndex === 4
								? 2
								: modelIndex === 3
								? 1
								: modelIndex === 2
								? 0
								: modelIndex === 1
								? 5
								: modelIndex
						][ref.current.name].modelScale[0],
						y: positions[
							movementX < 0
								? modelIndex
								: modelIndex === 0
								? 4
								: modelIndex === 5
								? 3
								: modelIndex === 4
								? 2
								: modelIndex === 3
								? 1
								: modelIndex === 2
								? 0
								: modelIndex === 1
								? 5
								: modelIndex
						][ref.current.name].modelScale[1],
						z: positions[
							movementX < 0
								? modelIndex
								: modelIndex === 0
								? 4
								: modelIndex === 5
								? 3
								: modelIndex === 4
								? 2
								: modelIndex === 3
								? 1
								: modelIndex === 2
								? 0
								: modelIndex === 1
								? 5
								: modelIndex
						][ref.current.name].modelScale[2],
						duration: 3,
						ease: "power2.in",
						// onComplete: () => {},
					});

					animations.push(positionAnime, scaleAnime);
				});

				Promise.all(animations).then(() => {
					setModelIndex(
						movementX < 0
							? (modelIndex + 1) % 6
							: modelIndex === 0
							? 5
							: modelIndex === 1
							? 0
							: modelIndex === 2
							? 1
							: modelIndex === 3
							? 2
							: modelIndex === 4
							? 3
							: 4
					);
				});
			}
		}
	});

	return (
		<group ref={groupRef} position={groupPosition}>
			{models.map((Model, index) => {
				const { modelPosition, modelScale, modelRotation } = modelProps[index];
				return (
					// <Suspense key={index} fallback={<Spinner />}>
					<Model
						ref={modelRefs[index]}
						key={index}
						position={modelPosition ?? [0, 0, 0]}
						scale={modelScale ?? [1, 1, 1]}
						rotation={modelRotation ?? [0, 0, 0]}
					/>
					// </Suspense>
				);
			})}
		</group>
	);
};

export default Group;
