import {
	Discord,
	Here,
	Intro,
	Testimonial,
	Blog,
} from "@components/home/index";

export default function Home() {
	return (
		<>
			<Intro />
			<Here />
			<Testimonial />
			<Blog />
			<Discord />
		</>
	);
}
