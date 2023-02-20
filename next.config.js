/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [],
		formats: ["image/webp"],
	},
};

module.exports = nextConfig;
