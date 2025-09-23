import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: 'standalone',
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};

export default nextConfig;
