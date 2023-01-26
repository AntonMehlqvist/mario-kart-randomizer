import { createEffect, createSignal, For } from 'solid-js';
import { characters, gliders, tires, vehicles } from '../gameInfo';
import { shuffleArray } from '../utils/shuffleArray';
import RandomBox from './RandomBox';
import SpinButton from './SpinButton';

type Props = {};

let audio: HTMLAudioElement | null = null;
if (typeof window !== 'undefined') {
	audio = new Audio(`${location ? location.origin : ''}/woo-hoo.mp3`);
}

const boxItems = [characters, vehicles, tires, gliders];

export default function Randomizer({}: Props) {
	const [isSpinning, setIsSpinning] = createSignal(false);
	const [boxes, setBoxes] = createSignal([
		[characters[0], ...shuffleArray(characters)],
		[characters[0], ...shuffleArray(vehicles)],
		[characters[0], ...shuffleArray(tires)],
		[characters[0], ...shuffleArray(gliders)],
	]);

	const spin = () => {
		if (isSpinning()) {
			// @ts-ignore-line
			setBoxes(boxItems.map(box => shuffleArray(box)));
		}
		audio?.play();
		setIsSpinning(true);
	};

	return (
		<div class="flex flex-col gap-12 items-center">
			<div class="flex flex-row gap-4 flex-wrap w-60 sm:flex-nowrap sm:w-auto">
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
}
