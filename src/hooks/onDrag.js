import { useCallback, useEffect, useRef } from "react";

const useDrag = (onDrag) => {
	const isDragging = useRef(false);

	const handleMouseDown = useCallback(() => {
		isDragging.current = true;
	}, []);

	const handleMouseUp = useCallback(() => {
		isDragging.current = false;
	}, []);

	const handleMouseMove = useCallback(
		(e) => {
			if (isDragging.current) {
				onDrag(e.movementX);
			}
		},
		[onDrag]
	);

	useEffect(() => {
		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [handleMouseDown, handleMouseUp, handleMouseMove]);

	return { isDragging: isDragging.current };
};

export default useDrag;
