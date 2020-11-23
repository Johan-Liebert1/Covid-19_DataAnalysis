export const growAnimation = {
	hidden: {
		scale: 0,
	},

	showing: {
		scale: 1,
		transition: {
			duration: 0.5,
			staggerChildren: true,
		},
	},

	exit: {
		scale: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const routeAnimation = {
	hidden: {
		x: "100vw",
		y: 0,
		// scale: 0,
	},

	showing: {
		x: 0,
		y: 0,
		// scale: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},

	exit: {
		x: "-100vw",
		y: 0,
		// scale: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};
