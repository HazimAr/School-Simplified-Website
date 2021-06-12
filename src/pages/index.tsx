import { NextJS, ChakraUI } from "@components/icons";
import { FaReact } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import {
	SiTypescript,
	SiGoogleanalytics,
	SiEslint,
	SiJest,
	SiStyleshare,
} from "react-icons/si";
import styled from "styled-components";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 600px;
`;
const FlexContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1300px;
	justify-content: center;
`;
const Box = styled.div`
	max-width: 370px;
	width: 100%;
	text-align: left;
	box-sizing: border-box;
	padding: 40px;
	margin: 20px;
	position: relative;
	background-color: #2e3748;
	border-radius: 10px;
	top: 0;
	transition: all ease-in-out 0.2s;
	&:hover {
		top: -8px;
	}
	& h2 {
		color: #52baff;
	}
`;

export default function Home(): JSX.Element {
	return (
		<Container>
			<Container>
				<h1>Hello, World</h1>
			</Container>
			<h2>Stack</h2>
			<FlexContainer>
				<Box>
					<SiTypescript size="40px" color="#007acd" />
					<h2>Typescript</h2>
					<p>
						Built to ensure long-term usability and a cleaner
						codebase, We use 100% Typescript
					</p>
				</Box>
				<Box>
					<ChakraUI />
					<h2>ChakraUI</h2>
					<p>
						Using Chakra UI to create accessible React apps with
						speed
					</p>
				</Box>
				<Box>
					<NextJS />
					<h2>NextJS</h2>
					<p>
						This template uses NextJS, Jest, Eslint-Config-Galex,
						Google Analytics
					</p>
				</Box>
				<Box>
					<SiStyleshare size="40px" />
					<h2>Styled Components</h2>
					<p>Using Styled Components to keep a modular code style</p>
				</Box>
				<Box>
					<GiFeather size="40px" color="white" />
					<h2>Lightweight</h2>
					<p>
						Setting the baseline configurations to provide an
						accelerated development environment
					</p>
				</Box>
				<Box>
					<SiGoogleanalytics size="40px" color="#f0ae33" />
					<h2>Google Analytics</h2>
					<p>
						You can set a tracking Id in src/config.ts to track
						analytics
					</p>
				</Box>
				<Box>
					<SiEslint size="40px" color="purple" />
					<h2>ESLint</h2>
					<p>
						Using a package of 30+ Eslint Plugins to ensure clean
						code quality and accessibility
					</p>
				</Box>
				<Box>
					<SiJest size="40px" color="red" />
					<h2>Jest</h2>
					<p>All tests, integration and unit run throughout jest</p>
				</Box>

				<Box>
					<FaReact size="40px" color="green" />
					<h2>React Icons</h2>
					<p>
						Icons from popular packages.{" "}
						<a
							style={{ color: "#00ffaa" }}
							href="https://react-icons.github.io/react-icons"
						>
							All Icons
						</a>{" "}
					</p>
				</Box>
			</FlexContainer>
		</Container>
	);
}
