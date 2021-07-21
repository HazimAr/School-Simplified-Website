import { Hero, Description, FAQ, Sponsors, Staff } from "@components/simplihacks/index";

export default function Simplihacks(): JSX.Element {
    return (
		<>
			<Hero />
			<Description />
			<FAQ />
			<Sponsors />
			<Staff />
		</>
	);
}