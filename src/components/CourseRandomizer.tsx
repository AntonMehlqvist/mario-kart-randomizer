import { Component, createSignal, For } from "solid-js";
import type { GameItem } from "../gameInfo";
import SpinButton from "./SpinButton";
import { shuffleArray } from "../utils/shuffleArray";
import CourseRandomBox from "./CourseRandomBox";

type Props = {boxItems: GameItem[][], initialItem: GameItem};

export const CourseRandomizer:Component<Props> = props => {
  const [isSpinning, setIsSpinning] = createSignal(false);
  const [boxes, setBoxes] = createSignal(props.boxItems.map((box) => [props.initialItem, ...shuffleArray(box)]));

  const spin = () => {
		if (isSpinning()) {
			// @ts-ignore-line
			setBoxes(
				props.boxItems.map((box, index) => [
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
				props.boxItems.map(box => [
					props.initialItem,
					...shuffleArray(box),
				])
			);
		}
		setIsSpinning(true);
	};


  return (
    <div class="flex flex-col gap-12 items-center">
    <div class="flex flex-col gap-4 flex-wrap w-50 sm:flex-nowrap sm:w-auto">
      <For each={boxes()}>
        {boxItems => (
          <CourseRandomBox
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
