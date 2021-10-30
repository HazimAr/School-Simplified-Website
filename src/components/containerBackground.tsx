import Container from "./container";

export default function ContainerBackground(props) {
	return (
		<Container
			position="relative"
			zIndex={1}
			_before={{
				content: "''",
				position: "absolute",
				zIndex: -1,
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				background: `url('${props.src}') center center`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				opacity: 0.1,
			}}
			{...props}
		>
			{props.children}
		</Container>
	);
}
