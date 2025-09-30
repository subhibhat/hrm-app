import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Thai, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
	weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
	title: "Thammasat University - Human Resource Management",
	description: "A comprehensive system for managing human resources at Thammasat University.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="en">
			<body className={`${ibmPlexSansThai.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
