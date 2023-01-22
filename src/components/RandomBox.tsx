import { createSignal, For, onMount } from 'solid-js';
import type { GameItem } from '../gameInfo';

type Props = {
	gameItems: GameItem[];
	isSpinning: boolean;
};

export default function RandomBox(props: Props) {
	let boxContent: HTMLDivElement | undefined;
	const [boxContentHeight, setBoxContentHeight] = createSignal(0);

	onMount(() => {
		if (!boxContent || !boxContent.children) return;
		setBoxContentHeight(
			boxContent.offsetHeight - boxContent.children[0].clientHeight
		);
	});

	return (
		<div class="h-32 bg-gray-200 border border-gray-300 w-28 rounded-md overflow-hidden">
			<div
				style={{
					transform: props.isSpinning
						? `translateY(-${boxContentHeight()}px)`
						: 'translateY(0)',
				}}
				class="transition-transform duration-[2500ms]"
				ref={boxContent}>
				<For each={props.gameItems}>
					{item => (
						<div class="flex items-center justify-center h-32 p-3">
							<img
								src={item.imgSrc}
								alt={item.name}
								loading="lazy"
							/>
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
