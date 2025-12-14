"use client";
import Image from "next/image";

type ClickerProps = {
	count: number;
	onClick: () => void;
};

export default function Clicker({ count, onClick }: ClickerProps) {
	return (
		<div className="clicker-row">
			<div className="left-column">
				<div
					role="button"
					tabIndex={0}
					onClick={onClick}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") onClick();
					}}
					className="click-button"
					aria-label="Click the ornament"
				>
					<div className="count">{count}</div>
				</div>
			</div>

			<div className="orpheus-wrapper">
				<Image
					src="/jollyorph.png"
					alt="Jolly Orpheus"
					width={360}
					height={360}
					className="orpheus-img"
					priority
				/>
			</div>
		</div>
	);
}
