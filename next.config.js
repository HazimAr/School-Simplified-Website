//@ts-ignore
module.exports = {
	// rust compiler (5x faster build times)
	async redirects() {
		return [
			{
				source: "/discord",
				destination: "https://discord.gg/gen7eZVzND",
				permanent: true,
			},
		];
	},
	swcMinify: false,
};
