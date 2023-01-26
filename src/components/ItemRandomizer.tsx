import { Component, createEffect, createSignal } from 'solid-js';
import { ItemGrid } from './ItemGrid';
import { items as gameItems } from '../gameInfo';
import SpinButton from './SpinButton';
import { getRandomItemSelection } from '../utils/getRandomItemSelection';
import { getItemNames } from '../utils/getItemNames';

export const ItemRandomizer: Component = () => {
	const [items, setItems] = createSignal(gameItems);
	const [activeItems, setActiveItems] = createSignal(getItemNames());

	const randomizeSelection = () => {
		setActiveItems(getRandomItemSelection());
	};

	return (
		<div class="w-full">
			<ItemGrid items={items()} activeItems={activeItems()} />
			<SpinButton onClick={randomizeSelection} />
		</div>
	);
};
