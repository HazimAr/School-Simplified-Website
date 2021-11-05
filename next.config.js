//@ts-ignore
module.exports = {
    async redirects() {
        return [{
            source: "/discord",
            destination: "https://discord.gg/gen7eZVzND",
            permanent: true,
        }, ];
    },
    // rust compiler (5x faster build times)
    swcMinify: false,
};