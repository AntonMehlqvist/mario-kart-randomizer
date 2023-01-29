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
		if (!boxContent || !boxContent.children) {
			return;
		}

		setBoxContentHeight(
			boxContent.offsetHeight - boxContent.children[0].clientHeight
		);
	});

	return (
		<div>
			<div class="relative h-32 w-28 overflow-hidden rounded-md bg-slate-100 bg-opacity-75">
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
							<div class="flex h-32 flex-col items-center justify-between p-3">
								<div class="flex h-[77px] items-center">
									<img
										height={128}
										width={77}
										src={item.imgSrc}
										alt={item.name}
									/>
								</div>
								<p class="text-sm">
									{item.name.substring(0, 8)}...
								</p>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
}
