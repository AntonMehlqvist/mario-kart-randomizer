export const getLongestArrayLength = (arrays: unknown[][]) => {
	let longestArrayLength = 0;

	arrays.forEach(array => {
		if (array.length > longestArrayLength) {
			longestArrayLength = array.length;
		}
	});

	return longestArrayLength;
};
