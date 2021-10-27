import {
	Code,
	Here,
	Intro,
	Testimonial,
	Blog,
	Clubs,
} from "@components/home/index";

export default function Home() {
	return (
		<>
			<Intro />
			<Here />
			<Testimonial />
			<Blog />
			<Code />
			<Clubs />
		</>
	);
}
