/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "@chakra-ui/react";
import NextsLink from "next/link";

// eslint-disable-next-line import/no-default-export
export default function NextLink(props: any): JSX.Element {
	return (
		<NextsLink href={props.href} passHref>
			<Link {...props}>{props.children}</Link>
		</NextsLink>
	);
}
