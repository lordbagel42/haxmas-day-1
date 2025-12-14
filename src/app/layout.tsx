import type { Metadata } from "next";
import { Geist, Geist_Mono, Henny_Penny } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});
2;
const hennyPenny = Henny_Penny({
	variable: "--font-henny-penny",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "boopinator",
	description: "bing bong",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${hennyPenny.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
