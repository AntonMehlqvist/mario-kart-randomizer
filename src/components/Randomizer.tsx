import { Component, createSignal, For } from 'solid-js';
import type { GameItem } from '../gameInfo';
import { fillArray } from '../utils/fillArray';
import { getLongestArrayLength } from '../utils/getLongestArrayLength';
import { shuffleArray } from '../utils/shuffleArray';
import RandomBox from './RandomBox';
import SpinButton from './SpinButton';

type Props = {
	boxes: GameItem[][];
	initialItem: GameItem;
};

let audio: HTMLAudioElement | null = null;
if (typeof window !== 'undefined') {
	audio = new Audio(`${location ? location.origin : ''}/woo-hoo.mp3`);
}

export const Randomizer: Component<Props> = props => {
	const longestBoxArrayLength = getLongestArrayLength(props.boxes);
	const filledBoxes = props.boxes.map(box =>
		fillArray(box, longestBoxArrayLength, box)
	);

	const [isSpinning, setIsSpinning] = createSignal(false);
	const [boxes, setBoxes] = createSignal(
		filledBoxes.map(box => [props.initialItem, ...shuffleArray(box)])
	);

	const spin = () => {
		if (isSpinning()) {
			// @ts-ignore-line
			setBoxes(
				filledBoxes.map((box, index) => [
					boxes()[index].at(-1) as GameItem,
					...shuffleArray(box),
				])
			);
		} else {
			/**
			 * Names get out of sync on first spin if
			 * this is not done. Not sure why ¯\_(ツ)_/¯...
			 */
			setBoxes(
				filledBoxes.map(box => [
					props.initialItem,
					...shuffleArray(box),
				])
			);
		}
		audio?.play();
		setIsSpinning(true);
	};

	return (
		<div class="flex flex-col items-center gap-12">
			<div class="flex w-60 flex-row flex-wrap gap-4 sm:w-auto sm:flex-nowrap">
				<For each={boxes()}>
					{(boxItems, index) => (
						<RandomBox
							index={index()}
							gameItems={boxItems}
							isSpinning={isSpinning()}
						/>
					)}
				</For>
			</div>

			<SpinButton onClick={spin} />
		</div>
	);
};
