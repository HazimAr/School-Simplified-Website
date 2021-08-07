export default function Timmy(): JSX.Element {
	return <></>;
}

export async function getServerSideProps(ctx: any) {
	ctx.res.writeHead(307, {
		Location: "https://spaceturtle.tech/tutorvc",
	});
	ctx.res.end();
	return { props: {} };
}
