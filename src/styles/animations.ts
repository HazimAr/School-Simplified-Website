function slideFade({ delay = 0.1, x = 0, y = 0 } = {}) {
	return {
		initial: {
			opacity: 0,
			x,
			y,
		},
		onView: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.5,
				delay,
			},
		},
	};
}

const slideInLeft = ({ amount = 100, delay = 0.1 } = {}) =>
	slideFade({ delay, x: -amount });
const slideInRight = ({ amount = 100, delay = 0.1 } = {}) =>
	slideFade({ delay, x: amount });
const slideInUp = ({ amount = 100, delay = 0.1 } = {}) =>
	slideFade({ delay, y: amount });
const slideInDown = ({ amount = 100, delay = 0.1 } = {}) =>
	slideFade({ delay, y: -amount });
const fadeIn = ({ delay = 0.1 } = {}) => slideFade({ delay });

function widthIn({ delay = 0.1 } = {}) {
	return {
		initial: {
			width: "0%",
		},
		onView: {
			width: "100%",
			transition: {
				duration: 0.5,
				delay,
			},
		},
	};
}

export { slideInLeft, slideInRight, slideInUp, slideInDown, fadeIn, widthIn };
