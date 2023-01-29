import { createEffect, createSignal, For } from 'solid-js';
import { characters, GameItem, gliders, tires, vehicles } from '../gameInfo';
import { shuffleArray } from '../utils/shuffleArray';
import RandomBox from './RandomBox';
import SpinButton from './SpinButton';

type Props = {};

let audio: HTMLAudioElement | null = null;
if (typeof window !== 'undefined') {
	audio = new Audio(`${location ? location.origin : ''}/woo-hoo.mp3`);
}

const allBoxItems = [characters, vehicles, tires, gliders];

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
			setBoxes(
				allBoxItems.map((box, index) => [
					boxes()[index].at(-1) as GameItem,
					...shuffleArray(box),
				])
			);
		} else {
			// If this is not done, the names are out of sync on the first spin. No idea why...
			setBoxes([
				[characters[0], ...shuffleArray(characters)],
				[characters[0], ...shuffleArray(vehicles)],
				[characters[0], ...shuffleArray(tires)],
				[characters[0], ...shuffleArray(gliders)],
			]);
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
}
