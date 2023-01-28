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
		<div class="h-32 w-28 overflow-hidden rounded-md bg-slate-100 bg-opacity-75">
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
						<div class="flex h-32 items-center justify-center p-3">
							<img
								height={128}
								width={77}
								src={item.imgSrc}
								alt={item.name}
							/>
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
