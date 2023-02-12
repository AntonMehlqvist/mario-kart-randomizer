import { Component, Index } from 'solid-js';
import type { GameItem } from '../gameInfo';
type Props = {
	items: GameItem[];
	activeItems: string[];
};

export const ItemGrid: Component<Props> = props => {
	const items = () =>
		props.items.map(item => ({
			...item,
			isActive: props.activeItems.includes(item.name),
		}));
	return (
		<div class="mx-auto grid max-w-2xl grid-cols-6 gap-3">
			<Index each={items()}>
				{item => {
					return (
						<div
							class={`flex w-full flex-col rounded-md bg-slate-100 bg-opacity-75 p-[15%] transition-opacity
						${!item().isActive ? 'bg-slate-300 opacity-50' : ''}`}>
							<div class="relative w-full after:block after:pb-[100%] after:content-['']">
								<img
									src={item().imgSrc}
									alt={item().name}
									class="absolute inset-0 left-1/2 top-1/2 max-h-full -translate-x-1/2 -translate-y-1/2 object-contain"
								/>
							</div>
						</div>
					);
				}}
			</Index>
		</div>
	);
};
