import { createEffect, createSignal, For } from "solid-js";
import { characters, gliders, tires, vehicles } from "../gameInfo";
import { shuffleArray } from "../utils/shuffleArray";
import RandomBox from "./RandomBox";

type Props = {};

let audio: HTMLAudioElement | null = null;
if (typeof window !== "undefined") {
  audio = new Audio(`${location ? location.origin : ""}/woo-hoo.mp3`);
}

export default function Randomizer({}: Props) {
  const [isSpinning, setIsSpinning] = createSignal(false);
  const [boxes, setBoxes] = createSignal([
    shuffleArray(characters),
    shuffleArray(vehicles),
    shuffleArray(tires),
    shuffleArray(gliders),
  ]);

  const spin = () => {
    if (isSpinning()) {
      // @ts-ignore-line
      setBoxes(boxes().map((box) => shuffleArray(box)));
    }
    audio?.play();
    setIsSpinning(true);
  };

  return (
    <div class="flex flex-col gap-12 items-center">
      <div class="flex flex-row gap-4 flex-wrap w-60 sm:flex-nowrap sm:w-auto">
        <For each={boxes()}>
          {(boxItems) => (
            <RandomBox gameItems={boxItems} isSpinning={isSpinning()} />
          )}
        </For>
      </div>

      <div class="text-center">
        <button
          class="border-4 mx-auto flex justify-center items-center border-red-600 bg-slate-50 hover:border-red-700 hover:bg-slate-100 active:border-red-900 active:bg-slate-200 rounded-full w-32 h-32"
          onClick={spin}
        >
          <img
            src="https://mario.wiki.gallery/images/thumb/d/d9/MK8_Mario_Icon.png/70px-MK8_Mario_Icon.png"
            alt="Mario head"
          />
        </button>
        <p class="text-white mt-4">Press the button to spin</p>
      </div>
    </div>
  );
}
