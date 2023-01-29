import { createSignal, For, onMount } from 'solid-js';
import type { GameItem } from '../gameInfo';

type Props = {
	gameItems: GameItem[];
	isSpinning: boolean;
};

export default function RandomBox(props: Props) {
	let boxContent: HTMLDivElement | undefined;
	let boxTitle: HTMLDivElement | undefined;
	const [boxContentHeight, setBoxContentHeight] = createSignal(0);
	const [boxTitleHeight, setBoxTitleHeight] = createSignal(0);

	onMount(() => {
		if (
			!boxContent ||
			!boxContent.children ||
			!boxTitle ||
			!boxTitle.children
		) {
			return;
		}

		setBoxContentHeight(
			boxContent.offsetHeight - boxContent.children[0].clientHeight
		);

		setBoxTitleHeight(
			boxTitle.offsetHeight - boxTitle.children[0].clientHeight
		);
	});

	return (
		<div>
			<div class="relative h-36 w-28 overflow-hidden rounded-md bg-slate-100 bg-opacity-75">
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

				<div class="absolute bottom-0 left-0 mt-2 h-8 w-28 overflow-hidden rounded-md  bg-slate-200">
					<div
						style={{
							transform: props.isSpinning
								? `translateY(-${boxTitleHeight()}px)`
								: 'translateY(0)',
						}}
						class="transition-transform duration-[2500ms]"
						ref={boxTitle}>
						<For each={props.gameItems}>
							{item => (
								<div class="flex h-8 items-center justify-center">
									<p>{item.name.substring(0, 8)}...</p>
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	);
}
