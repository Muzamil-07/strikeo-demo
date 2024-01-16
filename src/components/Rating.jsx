import React, { useState } from "react";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";

const MAX_RATING = 5;

const Rating = ({ rating, selector = false, onRatingChange }) => {
	const [hoverRating, setHoverRating] = useState(0);
	const [selectedRating, setSelectedRating] = useState(rating);

	const displayRating = selector && hoverRating > 0 ? hoverRating : selectedRating;
	const filledStars = Math.floor(displayRating);
	const hasHalfStar = displayRating % 1 !== 0;
	const emptyStars = MAX_RATING - filledStars - (hasHalfStar ? 1 : 0);

	const handleMouseEnter = (index) => {
		if (selector) {
			setHoverRating(index + 1);
		}
	};

	const handleMouseLeave = () => {
		if (selector) {
			setHoverRating(0);
		}
	};

	const handleClick = (index) => {
		if (selector) {
			setSelectedRating(index + 1);
			onRatingChange(index + 1);
			setHoverRating(0);
		}
	};

	const starIcons = [];

	for (let i = 0; i < filledStars; i++) {
		starIcons.push(
			<IoIosStar
				key={i}
				onMouseEnter={() => handleMouseEnter(i)}
				onMouseLeave={handleMouseLeave}
				onClick={() => handleClick(i)}
				className={selector ? "cursor-pointer" : ""}
			/>
		);
	}

	if (hasHalfStar) {
		starIcons.push(
			<IoIosStarHalf
				key={filledStars}
				onMouseEnter={() => handleMouseEnter(filledStars)}
				onMouseLeave={handleMouseLeave}
				onClick={() => handleClick(filledStars)}
				className={selector ? "cursor-pointer" : ""}
			/>
		);
	}

	for (let i = filledStars + (hasHalfStar ? 1 : 0); i < MAX_RATING; i++) {
		starIcons.push(
			<IoIosStarOutline
				key={i}
				onMouseEnter={() => handleMouseEnter(i)}
				onMouseLeave={handleMouseLeave}
				onClick={() => handleClick(i)}
				className={selector ? "cursor-pointer" : ""}
			/>
		);
	}

	return <div className="flex text-yellow-500">{starIcons}</div>;
};

export default Rating;
