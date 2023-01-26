type Props = {
	onClick: () => void;
	buttonImage?: string;
	text?: string;
	disabled?: boolean;
};

export default function SpinButton(props: Props) {
	return (
		<div class="text-center">
			<button
				class="border-4 mx-auto flex justify-center items-center border-red-600 bg-slate-50 hover:border-red-700 hover:bg-slate-100 active:border-red-900 active:bg-slate-200 rounded-full w-32 h-32 disabled:opacity-80 disabled:grayscale disabled:cursor-not-allowed"
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
			<p class="text-white mt-4">
				{props?.text ?? 'Press the button to spin'}
			</p>
		</div>
	);
}
