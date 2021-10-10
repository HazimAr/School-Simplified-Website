import {
	Heading,
	HStack,
	VStack,
	Image,
	Stack,
	UnorderedList,
	ListItem,
	Center,
} from "@chakra-ui/react";
import Button from "@components/button";
import ContainerBackground from "@components/containerBackground";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Npo() {
	return (
		<>
			<ContainerBackground src="/timmy/sunburn.png" py="100px">
				<ContainerInside>
					<VStack>
						<Heading>
							Accelerate Your <br /> Organization
						</Heading>
						<Button>Start Here</Button>
					</VStack>
				</ContainerInside>
			</ContainerBackground>
			<Container>
				<ContainerInside>
					<Heading>Becoming a NonProfit Organization</Heading>
					<HStack h="">
						<Image
							src="/timmy/information.png"
							alt="timmy standing on paper"
							maxW="100%"
						/>
						<Stack w="100%" textAlign="left">
							<Heading>What do you gain?</Heading>
							<UnorderedList>
								<ListItem>
									Nonprofit status, which makes it easier to
									give community service hours, and help more
									students
								</ListItem>
								<ListItem>
									Ability to open a bank account and receive
									donations through our fiscal sponsor
								</ListItem>
								<ListItem>
									Featured on social media, discord, and
									website.
								</ListItem>
								<ListItem>
									Access to use materials School Simplified
									gains from future partnerships
								</ListItem>
								<ListItem>
									Advice in marketing, finance, etc.
								</ListItem>
							</UnorderedList>
						</Stack>
					</HStack>
					<VStack>
						<Card
							heading="Keep: "
							items={[
								"Control over staff",
								"Control over operations",
								"Control over partnerships and business affairs",
								"Your brand imaging",
								"Majority of independence",
								"Majority of the credit for everything you have done and will do",
							]}
							src="/timmy/20.png"
						/>
						<Card
							heading="Give: "
							items={[
								'Legal "Ownership" of your organization and its assets',
								"Feature School Simplified on your website (as a partner or in about-us, and in fine print)",
								"Intellectual property rights (negotiable)",
								"Control over certain leadership positions (negotiated in a meeting)",
								"Control over anything required for legal purposes.",
							]}
							src="/timmy/10.png"
						/>
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

function Card({ heading, items, src = "/timmy/1.png" }) {
	return (
		<Stack
			textAlign="left"
			rounded={20}
			px="50px"
			py="25px"
			bg="brand.transparent"
			position="relative"
			maxW="700px"
			w="100%"
		>
			<Heading>{heading}</Heading>
			<UnorderedList>
				{items.map((item: string) => {
					return <ListItem>{item}</ListItem>;
				})}
			</UnorderedList>
			<Button w="30%">Enroll</Button>
			<Image
				position="absolute"
				right={-150}
				bottom={-50}
				w="100%"
				maxW="250px"
				src={src}
			/>
		</Stack>
	);
}
