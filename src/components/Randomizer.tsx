import { Component, createSignal, For } from 'solid-js';
import type { GameItem } from '../gameInfo';
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
	const [isSpinning, setIsSpinning] = createSignal(false);
	const [boxes, setBoxes] = createSignal(
		props.boxes.map(box => [props.initialItem, ...shuffleArray(box)])
	);

	const spin = () => {
		if (isSpinning()) {
			// @ts-ignore-line
			setBoxes(
				props.boxes.map((box, index) => [
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
				props.boxes.map(box => [
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
					{boxItems => (
						<RandomBox
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
