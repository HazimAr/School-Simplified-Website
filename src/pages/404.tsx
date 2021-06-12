import Link from "next/link";

export default function FourOhFour(): JSX.Element {
	return (
		<>
			<h1>404 Page not Found</h1>
			<h3>Edit this page in /src/pages/404</h3>
			<Link href="/">
				<a>Go back home</a>
			</Link>
		</>
	);
}
