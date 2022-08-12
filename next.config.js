/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		ONLY_IN_DOT_NEXT_CONFIG: 'next.config.js',
		NEXT_PUBLIC_ONLY_IN_DOT_NEXT_CONFIG: 'next.config.js',
	},
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig
