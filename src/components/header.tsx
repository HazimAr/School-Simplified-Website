import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Header = styled.header`
	background-color: #1a202c;
	padding: 5px 50px;
	display: flex;
	box-sizing: border-box;
	border-top: 5px #5cfff1 solid;
	justify-content: space-between;
	align-items: center;
`;
const StyledLink = styled.a`
	margin: 0 20px;
`;

export const headerOptions = [
	["Home", "/#"],
	["Services", "/#services"],
	["Portfolio", "/#portfolio"],
	["Pricing", "/#pricing"],
	["Contact", "/contact"],
];

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Header>
			<h2>NextJS Boilerplate</h2>
			<div>
				<StyledLink
					href="https://github.com/HazimAr/"
					aria-label="Github"
				>
					<FaGithub size="30px" />
				</StyledLink>
				<StyledLink
					href="https://www.linkedin.com/in/hazim-arafa-a439aa205/"
					aria-label="LinkedIn"
				>
					<FaLinkedin size="30px" />
				</StyledLink>
			</div>
		</Header>
	);
}
