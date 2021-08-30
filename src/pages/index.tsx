import {
	Discord,
	Here,
	Intro,
	Stats,
	Testimonial,
	Why,
} from "@components/home/index";

export default function Home(): JSX.Element {
	return (
		<>
			<Intro />
			<Stats />
			<Here />
			<Why />
			<Testimonial />
			<Discord />
		</>
	);
}
