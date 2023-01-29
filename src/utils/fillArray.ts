import { shuffleArray } from './shuffleArray';

export const fillArray = <T>(array: T[], length: number, fillItems: T[]) => {
	const amountToFill = length - array.length;
	let newFillItems = [...fillItems];

	if (fillItems.length < amountToFill) {
		const numberOfMissingItems = amountToFill - fillItems.length;
		newFillItems = fillArray(newFillItems, numberOfMissingItems, fillItems);
	}

	const [firstItem, ...rest] = array;

	return [
		firstItem,
		...shuffleArray(newFillItems).slice(0, amountToFill),
		...rest,
	];
};
