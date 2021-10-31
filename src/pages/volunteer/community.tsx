import Hero from "./hero";
import { HStack, Center, VStack, Image} from "@chakra-ui/react";

import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
export default function Community() {
	return (
		<>
			<Container
				h="300px">
				<ContainerInside>
					<Hero heading="Community Division Applications" />
				</ContainerInside>
			</Container>
			<Container 
				bg="#8F9CFE"
				h="400px">
				<ContainerInside>
					<Center>
						<HStack>
							<Image
								src="/timmy/timmy_lanyard.png"
								alt="timmy with lanyard"
								w="300px"
								mr="70px"
							/>
							<VStack
								spacing="20px">
								<Button 
									bg="#7283FE" 
									md="100px" 
									w="300px"
									h="50px"
									textAlign="left">
									Moderator
								</Button>
								<Button 
									bg="#7283FE" 
									md="100px" 
									w="300px"
									h="50px"
									textAlign="left">
									Events Organizer
								</Button>
								<Button 
									bg="#7283FE" 
									md="100px" 
									w="300px"
									h="50px"
									textAlign="left">
									Advisor
								</Button>
							</VStack>
						</HStack>
					</Center>
					 
				</ContainerInside>
			</Container>
		</>
	);
}
