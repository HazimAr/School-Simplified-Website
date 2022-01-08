import {
	Box,
	Center,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Text, VStack
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { slideInLeft, slideInUp } from "@styles/animations";
import { motion } from "framer-motion";
import { BlogListing } from "types";
import { toAuthorAttribution } from "util/parse_notion";

export default function Blog({ listing }: { listing: BlogListing[] }) {
	// console.log(listing);
	return (
		<Container
			// src="/blog.jpg"
			background="linear-gradient(180deg, rgba(99, 115, 238, 0.55) 0%, rgba(197, 203, 255, 0.55) 100%)"
			py="50px"
			overflow="hidden"
		>
			<ContainerInside>
				<Flex position="absolute" direction="row" zIndex={-1}>
					<Box flex="0 0 50%" />
					<Center flex="0 0 50%">
						<Image
							src="/timmy/12.png"
							opacity={0.3}
							alt="Timmy holding a book"
						/>
					</Center>
				</Flex>
				<motion.div
					initial="initial"
					whileInView="onView"
					variants={slideInLeft()}
				>
					<Flex direction="row" mx={{ base: 12, sm: 24, md: 0 }}>
						<VStack spacing={8} flex={{ base: 1, md: "0 0 50%" }}>
							<VStack
								spacing={1}
								textAlign="left"
								align="flex-start"
							>
								<Heading size="lg">Check out</Heading>
								<Heading fontWeight="bold">
									The Latest Read!
								</Heading>
								<Text>
									Our blogs are written by student authors representing our generation in countries around the world. Check out what they have to say!
								</Text>
							</VStack>
							<NextChakraLink href="/blog" alignSelf="flex-start">
								<Button timmysrc="/timmy/17.png">
									Read More
								</Button>
							</NextChakraLink>
						</VStack>
						<Box flex={{ base: null, md: "0 0 50%" }} />
					</Flex>
				</motion.div>
				<SimpleGrid
					columns={{ base: 1, md: listing.length }}
					mt={8}
					mx={{ base: 12, sm: 24, md: 0 }}
					gap={{ base: 10, md: 4, lg: 10 }}
				>
					{listing.map((blogListing, index) => (
						<motion.div
							initial="initial"
							whileInView="onView"
							variants={slideInUp({ delay: 0.3 * index })}
							key={blogListing.link}
						>
							<Card {...blogListing} key={blogListing.link} />
						</motion.div>
					))}
				</SimpleGrid>
				{/* <Stack textAlign="left" spacing={5}>
					<Stack w={{ base: "100%", lg: "50%" }}>
						<Heading size="lg">Check out</Heading>
						<Heading fontWeight="bold">The Latest Read!</Heading>
						<Text>
							Check out the latest blog from our student authors
							and read about what they have to say!
						</Text>
						<NextChakraLink href="/blog">
							<Button timmysrc="/timmy/17.png">Read More</Button>
						</NextChakraLink>
					</Stack>
					<HStack
						justify="center"
						size="md"
						spacing={{ base: 0, sm: 5 }}
						flexDir={{ base: "column", sm: "row" }}
						align="flex-start"
					>
						<Card
							src={listing[0]?.icon}
							title={listing[0]?.title}
							href={listing[0]?.link}
						/>
						<Card
							src={listing[1]?.icon}
							title={listing[1]?.title}
							href={listing[1]?.link}
						/>
						<Card
							src={listing[2]?.icon}
							title={listing[2]?.title}
							href={listing[2]?.link}
						/>
					</HStack>
				</Stack> */}
			</ContainerInside>
		</Container>
	);
}

const dtFormatter = new Intl.DateTimeFormat("en-US");

function Card(listing: BlogListing) {
	return (
		<Box
			flex={1}
			style={{ aspectRatio: "1" }}
			bg="#5A60ADCC"
			rounded={10}
			overflow="hidden"
			transition="transform 0.2s ease-in"
			_hover={{
				transform: "scale(0.95)",
			}}
		>
			<NextChakraLink href={`/blog/${listing.link ?? ""}`} h="100%">
				<Flex flexDir="column" h="100%">
					<Box
						bg="brand.transparent"
						flex={1}
						backgroundImage={listing.icon}
						backgroundSize="cover"
						backgroundPosition="center"
					/>
					<Flex
						bg="#5A60AD"
						px={4}
						py={2}
						flexDir="column"
						align="flex-start"
					>
						<Text as="i" fontSize={12}>
							{dtFormatter.format(new Date(listing.created_time))}{" "}
							| {listing.category}
						</Text>
						<Heading size="sm" textAlign="left">
							{listing.title}
						</Heading>
						{listing.authors ? (
							<Text fontSize={14}>
								{toAuthorAttribution(listing.authors)}
							</Text>
						) : null}
					</Flex>
				</Flex>
			</NextChakraLink>
		</Box>
	);
}
