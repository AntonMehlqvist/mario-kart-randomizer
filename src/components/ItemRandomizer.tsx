import { Component, createEffect, createSignal } from "solid-js";
import { ItemGrid } from "./ItemGrid";
import { items as gameItems } from "../gameInfo";
import SpinButton from "./SpinButton";
import { getRandomItemSelection } from "../utils/getRandomItemSelection";
import { getItemNames } from "../utils/getItemNames";

export const ItemRandomizer: Component = () => {
  const [items, setItems] = createSignal(gameItems);
  const [activeItems, setActiveItems] = createSignal(getItemNames());

  const randomizeSelection = () => {
    setActiveItems(getRandomItemSelection());
  };

  return (
    <div class="w-full">
      <ItemGrid items={items()} activeItems={activeItems()} />
      <SpinButton
        class="mt-12"
        onClick={randomizeSelection}
        text="Press the button to randomize"
      />
    </div>
  );
};
