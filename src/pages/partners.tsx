import {
	Box,
	Center,
	Divider,
	Heading,
	HStack,
	Image,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Text,
	useDisclosure,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import StyledButton from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { ReactElement } from "react";

export default function partners(): ReactElement {
	return (
		<>
			<Container>
				<ContainerInside align="center">
					<Wrap justify="center" align="center" mt={50}>
						<WrapItem>
							<Box maxW="60ch" textAlign="left" mt={10}>
								<Heading mb={10}>
									A network for you to become a part of the
									journey
								</Heading>
								<Text my={5}>
									Connect with us, take advantage of our
									resources, and together we can build a
									brighter future.
								</Text>
								{/* <NextLink href="/notes">
							<Button>Get Free Help</Button>
						</NextLink> */}
							</Box>
						</WrapItem>

						<WrapItem>
							<Box textAlign="left">
								<Image
									maxH={400}
									src="/timmy/23.png"
									alt="Timmy with graduation cap"
									display={{ base: "none", md: "block" }}
								/>
							</Box>
						</WrapItem>
					</Wrap>
					<NextLink href="https://docs.google.com/forms/d/e/1FAIpQLScxSrndCBz1VUA-fv5TvfmEpdowUKws1euU4nuxMcSE51JiZA/viewform?usp=sf_link">
						<StyledButton
							display="block"
							width={{ base: "50", md: "50", sm: "40" }}
						>
							Apply Now
						</StyledButton>
					</NextLink>

					<Divider bg="white" my={10} />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside>
					<Heading mb={10}>Our Partners</Heading>
					<HStack></HStack>
				</ContainerInside>
			</Container>
		</>
	);
}

type ImageCell = {
	src: string;
	alt: string;
	desc: string;
};

function Cell({ src, alt, desc }: ImageCell): JSX.Element {
	const graceTime: number = 250;

	const { isOpen, onOpen, onClose } = useDisclosure();
	let timeout: NodeJS.Timeout;
	return (
		<Popover isOpen={isOpen}>
			<PopoverTrigger>
				<Center
					bg="#D8D6EC"
					rounded="lg"
					mt={10}
					onMouseEnter={() => {
						if (timeout) clearTimeout(timeout);
						onOpen();
					}}
					onMouseLeave={() =>
						(timeout = setTimeout(onClose, graceTime))
					}
				>
					<Image src={src} alt={alt} />
				</Center>
			</PopoverTrigger>
			<PopoverContent bg="#D8D6EC" color="#8287BE">
				<Box
					onMouseEnter={() => {
						if (timeout) clearTimeout(timeout);
						onOpen();
					}}
					onMouseLeave={() =>
						(timeout = setTimeout(onClose, graceTime))
					}
				>
					<PopoverHeader fontWeight={700}>{alt}</PopoverHeader>
					<PopoverBody>{desc}</PopoverBody>
				</Box>
			</PopoverContent>
		</Popover>
	);
}
