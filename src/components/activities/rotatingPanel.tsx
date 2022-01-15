import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import NextLink from "@components/nextChakra";
import RotatingPanel from "@components/rotatingPanel";
//import { MdRoundedCorner } from "react-icons/md";
import { ActivitySlideProps } from "types";

const clubs: ActivitySlideProps[] = [
	{
		clubName: "Coding Club",
		key: "Coding Club",
		clubDesc:
			"In the Simplified Coding Club you'll learn the basics of programming and how to apply your new skills in situations like contest programming, hackathons, and your own personal projects. Programming is an awesome skill to learn so we urge everyone of all skill levels to join! Not only will you be able to create projects relevant to what you want to do, but you can use them in real life as well.",
		src: "/clubs/coding.png",
		link: "https://forms.gle/YUYZZrtFGzaCXDhNA",
	},
	{
		clubName: "Cooking Club",
		key: "Cooking Club",
		clubDesc:
			"Our goal is to not only provide an opportunity to enhance such essential life skills but also to have fun and build a strong community! Anyone over 13+ can join whether or not they have true experience. All that matters is that everyone is willing to learn from one another and explore new ideas.",
		src: "/clubs/cooking.png",
		link: "https://forms.gle/YUYZZrtFGzaCXDhNA",
	},
	{
		clubName: "Music Club",
		key: "Music Club",
		clubDesc:
			"In this club, we gather musicians and help with music, tempos, composing, rhythms, etc. This is a great opportunity for you to interact with other musicians and develop in your musical career! We take musicians of any kind! Woodwind, strings, etc. Feel free to join and play with us!",
		src: "/clubs/music.png",
		link: "https://forms.gle/YUYZZrtFGzaCXDhNA",
	},
	// {
	//	clubName: "Advocacy Club",
	//	key: "Advocacy Club",
	//	clubDesc:
	//		"It takes a lot to stand up and make your voice heard. Are you up for that challenge? Join the Simplified Advocacy Club, and work alongside young students to make a difference and make your voice heard.",
	//	src: "/clubs/advocacy.png",
	//	link: "https://forms.gle/s8DnKtdafR6WZrFH7",
	//},
	{
		clubName: "Mathematics Club",
		key: "Mathematics Club",
		clubDesc:
			"In the Mathematics Club, you will learn about all the fundamentals concepts of mathematics! We regularly post math facts and questions, and you can feel free to suggest  even more. If that is not enough, we will also demonstrate applications and have tournaments that you can compete in!",
		src: "/clubs/mathematics.png",
		link: "https://forms.gle/YUYZZrtFGzaCXDhNA",
	},
	//{
	//	clubName: "News Club",
	//	key: "News Club",
	//	clubDesc:
	//		"The News Club will talk and write about current events around the world to inform people in the School Simplified community that may not follow the news as much or at all. Join now to stay updated with daily events and news!",
	//	src: "/clubs/news.png",
	//	link: "https://forms.gle/vEKxniQR1XL8thWN6",
	//},
	{
		clubName: "Electronics Club",
		key: "Electronics Club",
		clubDesc:
			"Electronics club is a club for all the tinkerers and makers. It will cover a variety of topics including Basics, Arduino, IoT, and more. If you are someone who wants to kickstart their journey of learning and building amazing electronics, then this club is right for you!",
		src: "/clubs/electronics.png",
		link: "https://forms.gle/YUYZZrtFGzaCXDhNA",
	},
	//{
	//	clubName: "Art Club",
	//	key: "Art Club",
	//	clubDesc:
	//		"In the Art Club, we will be talking about art in general, along with sharing current and past projects with each other! We will do events and activities related to art, and are open to all!",
	//	src: "/clubs/arts.png",
	//	link: "https://forms.gle/8AjuCavRfZFuzPE36",
	//},
	//{
	//	clubName: "Chess Club",
	//	key: "Chess Club",
	//	clubDesc:
	//		"We strive to help people learn and enjoy the game of chess, or to teach others the basics of the game. We also host tournaments for the game with other events at hand. We do have a couple rules, however; keep in mind that you must be 13+, follow all server rules, and have fun!",
	//	src: "/clubs/chess.png",
	//	link: "https://forms.gle/2fKVbWKTsXQYc54i6",
	//},
];

export default function ActivitiesRotatingPanel(): JSX.Element {
	return (
		<RotatingPanel
			innerPanelProps={clubs}
			Element={Panel}
			viewPortHeight={{ base: 500, sm: 400, md: 350, lg: 400 }}
			animationType="fade"
		/>
	);
}

function Panel({
	clubName,
	clubDesc,
	src,
	link,
	...props
}: ActivitySlideProps): JSX.Element {
	return (
		<Flex rounded={50} overflow="hidden" {...props}>
			<Box
				backgroundImage={src}
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				flex={1}
				display={{ base: "none", lg: "block" }}
			/>
			{/* <Image src={src} alt={clubName + " team logo"} w="100%" /> */}
			<VStack
				justify="center"
				align={{ base: "center", lg: "flex-start" }}
				bg="#5E65B7"
				py={5}
				pl={{ base: 5, lg: 10 }}
				pr={5}
				flex={1}
				spacing={5}
			>
				<Heading size="xl" textAlign={{ base: "center", lg: "left" }}>
					{clubName}
				</Heading>
				<Text textAlign="left">{clubDesc}</Text>

				<NextLink isExternal href={link}>
					<Button timmysrc="/timmy/tim_transparent_sporty.png">
						Join Club
					</Button>
				</NextLink>
			</VStack>
		</Flex>
	);
}
