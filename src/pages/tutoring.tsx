import { Center } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Tutoring(): JSX.Element {
	return (
		<Container>
			<ContainerInside py={10}>
				<Center>
					<iframe
						title=""
						src="https://docs.google.com/forms/d/e/1FAIpQLSfT9urTBij4P7Pb3MA0yYw-VfdSJOxLJeMkw9KEn8pAGzbtTQ/viewform?embedded=true"
						height="750"
						width="500"
						frameBorder={0}
						marginHeight={0}
						marginWidth={0}
					>
						Loading…
					</iframe>
				</Center>
			</ContainerInside>
		</Container>
	);
}
