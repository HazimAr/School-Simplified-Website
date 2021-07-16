import { Discord, Here, Intro, Testimonial, Why } from "@components/home/index";

export default function Home(): JSX.Element {
	return (
		<>
			<Intro />
			<Here />
			<Why />
			<Testimonial />
			<Discord />
		</>
	);
}
