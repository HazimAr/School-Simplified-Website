import { Hero, Description, FAQ, Schedule, Sponsors, Staff } from "@components/simplihacks/index";

export default function Simplihacks(): JSX.Element {
    return (
		<>
			<Hero />
			<Description />
			<FAQ />
            <Schedule />
			<Sponsors />
			<Staff />
		</>
	);
}