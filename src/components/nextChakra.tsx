/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

// eslint-disable-next-line import/no-default-export
export default function NextChakraLink(props: LinkProps): JSX.Element {
	return (
		<NextLink href={props.href} passHref>
			<Link outline="none" {...props}>
				{props.children}
			</Link>
		</NextLink>
	);
}
