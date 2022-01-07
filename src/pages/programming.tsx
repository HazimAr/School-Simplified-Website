import {
	Testimonials,
	PSprogramming,
	FAQ,
} from "@components/programming/index";

export default function Programming(): JSX.Element {
	return (
		<>
			<PSprogramming />
			<Testimonials />
			<FAQ />
		</>
	);
}
