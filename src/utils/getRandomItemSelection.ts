import random from 'random';
import { getItemNames } from './getItemNames';

export const getRandomItemSelection = () => {
	return getItemNames().filter(() => random.boolean());
};
