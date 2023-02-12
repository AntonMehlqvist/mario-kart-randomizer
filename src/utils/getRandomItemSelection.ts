import random from 'random';
import { items } from '../gameInfo';
import { getItemNames } from './getItemNames';
import { shuffleArray } from './shuffleArray';

export const getRandomItemSelection = () => {
	let numberOfItems = random.int(1, items.length);
	const numberOfShuffles = random.int(1, 20);

	if (numberOfItems > 14) {
		numberOfItems =
			random.int(0, 100) < 75
				? numberOfItems - random.int(2, 5)
				: numberOfItems;
	} else if (numberOfItems < 8) {
		numberOfItems =
			random.int(0, 100) < 75
				? numberOfItems + random.int(1, 5)
				: numberOfItems;
	}

	let gameItemNames = getItemNames();
	for (let i = 0; i < numberOfShuffles; i++) {
		gameItemNames = shuffleArray(gameItemNames);
	}

	return gameItemNames.slice(0, numberOfItems);
};
