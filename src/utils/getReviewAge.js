function getReviewAge(reviewedDate) {
	const reviewDate = new Date(reviewedDate);
	const currentDate = new Date();

	const timeDifference = currentDate.getTime() - reviewDate.getTime();

	const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	if (daysDifference === 0) {
		return "Today";
	} else {
		return `${daysDifference}d`;
	}
}

export default getReviewAge;
