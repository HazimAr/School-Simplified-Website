import {
	Center,
	Heading,
	Icon,
	Link,
	SimpleGrid,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/**
 * Fetches all courses from the backend
 * @returns all the Courses available
 */
function getCourses() {
	// placeholder for actual query
	return [
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
		{ title: "gfdhygvubhnm", href: "/" },
	];
}

const courses = getCourses();

/**
 * Renders the course list at the bottom of the page
 * @returns the JSX Element with all the information inside
 */
export default function CourseList(): JSX.Element {
	const [pageNum, setPageNum] = React.useState(0);

	const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 }),
		rows = 3;
	// console.log("columns: " + columns);
	if (!columns) {
		console.error("useBreakpointValue not working at ALL");
		return <></>;
	}
	const perPage = rows * columns;
	// console.log("perPage: " + perPage);

	let pages = Math.ceil(courses.length / perPage);
	// console.log("pages: " + pages + " length: " + courses.length);
	if (pageNum >= pages) {
		setPageNum(pageNum - 1);
	}

	return (
		<Container>
			<ContainerInside my={5}>
				<Heading mb={5}>Courses</Heading>
				<SimpleGrid columns={columns} spacing={3}>
					{courses
						.slice(perPage * pageNum, perPage * (pageNum + 1))
						.map((course, idx: number) => (
							<Link
								href={course.href}
								_hover={{
									textDecoration: "none",
									cursor: "auto",
								}}
								key={"course_" + idx}
							>
								<Center
									borderRadius={25}
									fontSize={16}
									_hover={{ cursor: "pointer" }}
									bg="brand.transparent"
									p={10}
								>
									{course.title}
								</Center>
							</Link>
						))}
				</SimpleGrid>
				<Center mt={5}>
					<Button
						onClick={() => setPageNum(pageNum - 1)}
						p={0}
						bg="brand.transparent"
						w={10}
						mx={2}
						zIndex={2}
						disabled={pageNum <= 0}
					>
						<Center>
							<Icon as={FaArrowLeft} boxSize={6} />
						</Center>
					</Button>
					<Text>
						{pageNum} / {pages}
					</Text>
					<Button
						onClick={() => setPageNum(pageNum + 1)}
						p={0}
						bg="brand.transparent"
						w={10}
						mx={2}
						zIndex={2}
						disabled={pageNum >= pages - 1}
					>
						<Center>
							<Icon as={FaArrowRight} boxSize={6} />
						</Center>
					</Button>
				</Center>
			</ContainerInside>
		</Container>
	);
}
