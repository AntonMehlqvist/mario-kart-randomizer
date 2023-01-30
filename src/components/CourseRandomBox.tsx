import { createSignal, For, onMount } from 'solid-js';
import type { GameItem } from '../gameInfo';

type Props = {
	gameItems: GameItem[];
	isSpinning: boolean;
};

export default function CourseRandomBox(props: Props) {
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
			<div class="relative h-32 w-34 overflow-hidden rounded-md bg-slate-100 bg-opacity-75">
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
							<div class="relative flex flex-col items-center justify-between p-3">
									<img
										src={item.imgSrc}
										alt={item.name}
									/>
								<div class="absolute bottom-2 right-2 h-7 w-7">
									<img 
										src={item.cup?.imgSrc}
									/>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
}
