/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [],
		formats: ["image/webp"],
	},
	async redirects() {
		return [
			{
				source: "/team",
				destination: "/",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
