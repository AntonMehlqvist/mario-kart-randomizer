type Props = {
	onClick: () => void;
	buttonImage?: string;
	text?: string;
	disabled?: boolean;
	class?: string;
};

export default function SpinButton(props: Props) {
	return (
		<div class={`touch-manipulation text-center ${props.class}`}>
			<button
				class="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-red-600 bg-slate-50 hover:border-red-700 hover:bg-slate-100 active:border-red-900 active:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-80 disabled:grayscale"
				onClick={props.onClick}
				disabled={props?.disabled}>
				<img
					src={
						props?.buttonImage ??
						'https://mario.wiki.gallery/images/thumb/d/d9/MK8_Mario_Icon.png/70px-MK8_Mario_Icon.png'
					}
					alt="Mario head"
				/>
			</button>
			<p class="mt-4 text-white">
				{props?.text ?? 'Press the button to spin'}
			</p>
		</div>
	);
}
