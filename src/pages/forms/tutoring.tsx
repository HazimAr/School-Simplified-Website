import { Center } from "@chakra-ui/react";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";

export default function Tutoring(): JSX.Element {
	return (
		<ContainerBackground src="/timmy/lofi_timmy.png" py="50px">
			<ContainerInside>
				<Center>
					<iframe
						title=""
						src="https://docs.google.com/forms/d/e/1FAIpQLSfT9urTBij4P7Pb3MA0yYw-VfdSJOxLJeMkw9KEn8pAGzbtTQ/viewform?embedded=true"
						height="600"
						width="600"
						frameBorder={0}
						marginHeight={0}
						marginWidth={0}
					>
						Loading…
					</iframe>
				</Center>
			</ContainerInside>
		</ContainerBackground>
	);
}
