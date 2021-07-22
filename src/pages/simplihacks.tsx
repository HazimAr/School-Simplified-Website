import { Hero, Description, Winners, FAQ, Sponsors, Staff } from "@components/simplihacks/index";

export default function Simplihacks(): JSX.Element {
    return (
		<>
			<Hero />
			<Description />
			<Winners />
			<FAQ />
			<Sponsors />
			<Staff />
		</>
	);
}