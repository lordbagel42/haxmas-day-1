"use client";
import Clicker from "@/components/Clicker";
import { useEffect, useState } from "react";

export default function Home() {
	const [count, setCount] = useState(0);
	const [secretShown, setSecretShown] = useState(false);

	useEffect(() => {
		document.title = `boops: ${count}`;
	}, [count]);

	useEffect(() => {
		if (count >= 69 && !secretShown) {
			setSecretShown(true);
		}
	}, [count, secretShown]);

	return (
		<div className="app-root">
			<main>
				<div style={{ maxWidth: 1100 }}>
					<div style={{ marginBottom: 24 }}>
						<h1 className="title">boopinator: the game</h1>
						<div className="subtitle">boop the boopinator ↓</div>
					</div>

					<Clicker count={count} onClick={() => setCount((c) => c + 1)} />
				</div>
			</main>

			{secretShown && (
				<div className="modal-backdrop" onClick={() => setSecretShown(false)}>
					<div className="modal-card" onClick={(e) => e.stopPropagation()}>
						<h3>🎁 you booped 69 times 🎁</h3>
						<p>
							<em>nice</em>
						</p>

						<a
							className="secret-link"
							href="https://link.bagelindustries.com/boopinated"
						>
							secret gift :3
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
