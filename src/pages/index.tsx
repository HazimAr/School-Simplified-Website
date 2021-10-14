import { Discord, Here, Intro, Testimonial, Why } from "@components/home/index";

export default function Home() {
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
