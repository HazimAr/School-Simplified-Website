export default function Tutorbot(): JSX.Element {
	return <></>;
}

export async function getServerSideProps(ctx: any) {
	ctx.res.writeHead(307, {
		Location: "https://spaceturtle.tech/tutorbot",
	});
	ctx.res.end();
	return { props: {} };
}
