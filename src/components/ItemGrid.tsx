import { Component, createEffect, For } from 'solid-js';
import type { GameItem } from '../gameInfo';
type Props = {
	items: GameItem[];
	activeItems: string[];
};

export const ItemGrid: Component<Props> = props => {
	createEffect(() => {
		console.log(props.activeItems);
	});
	return (
		<div class="grid grid-cols-fit w-full">
			<For each={props.items}>
				{item => {
					const isActive = props.activeItems.includes(item.name);
					return (
						<div
							class={`aspect-square p-2 max-w-[5rem] max-h-[5rem]
						${!isActive ? 'opacity-50' : ''}`}>
							<img src={item.imgSrc} alt={item.name} />
						</div>
					);
				}}
			</For>
		</div>
	);
};
