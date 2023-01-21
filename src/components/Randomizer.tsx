import { createEffect, createSignal, For } from 'solid-js';
import { characters, gliders, tires, vehicles } from '../gameInfo';
import { shuffleArray } from '../utils/shuffleArray';
import RandomBox from './RandomBox';

type Props = {};

export default function Randomizer({}: Props) {
	const [isSpinning, setIsSpinning] = createSignal(false);
	const [boxes, setBoxes] = createSignal([
		characters,
		vehicles,
		tires,
		gliders,
	]);

	const spin = () => {
		if (isSpinning()) {
			// @ts-ignore-line
			setBoxes(boxes().map(box => shuffleArray(box)));
		}
		setIsSpinning(true);
	};

	return (
		<div class="flex flex-col gap-6 items-center">
			<div class="flex gap-4">
				<For each={boxes()}>
					{boxItems => (
						<RandomBox
							gameItems={boxItems}
							isSpinning={isSpinning()}
						/>
					)}
				</For>
			</div>

			<button
				class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-max"
				onClick={spin}>
				{isSpinning() ? 'Spin again' : 'Spin'}
			</button>
		</div>
	);
}
