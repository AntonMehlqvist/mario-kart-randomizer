import { Component, createEffect, For, Index } from 'solid-js';
import type { GameItem } from '../gameInfo';
type Props = {
	items: GameItem[];
	activeItems: string[];
};

type ItemGridItem = GameItem & { isActive: boolean };

export const ItemGrid: Component<Props> = props => {
	const items = () =>
		props.items.map(item => ({
			...item,
			isActive: props.activeItems.includes(item.name),
		}));
	return (
		<div class="mx-auto grid max-w-6xl grid-cols-6 gap-3">
			<Index each={items()}>
				{item => {
					return (
						<div
							class={`aspect-square w-full rounded-md bg-slate-100 p-[15%] transition-opacity
						${!item().isActive ? 'opacity-50' : ''}`}>
							<img
								src={item().imgSrc}
								alt={item.name}
								class="aspect-square object-contain mix-blend-multiply"
							/>
						</div>
					);
				}}
			</Index>
		</div>
	);
};
