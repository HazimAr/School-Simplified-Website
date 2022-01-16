import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AcademicServices from "./academicServices";
import Blog from "./blog";
import Chapters from "./chapters";
import Clubs from "./clubs";
import Code from "./code";
import GettingStarted from "./gettingStarted";
import Intro from "./intro";
import PopUp from "./popup";
import Projects from "./projects";
import ProgrammingSimplified from "./ps";
import Testimonial from "./testimonial";

function MotionDiv({ children, ...props }) {
	return (
		<SimpleGrid position="relative">
			<Box opacity={0} zIndex={-1}>
				{children}
			</Box>
			<motion.div
				{...props}
				style={{
					position: "absolute",
					gridColumn: 1,
					gridRow: 1,
					width: "100%",
					height: "100%",
				}}
			>
				{children}
			</motion.div>
		</SimpleGrid>
	);
}

export {
	AcademicServices,
	Blog,
	Chapters,
	Clubs,
	Code,
	GettingStarted,
	Intro,
	Projects,
	ProgrammingSimplified,
	Testimonial,
	PopUp,
	MotionDiv,
};
