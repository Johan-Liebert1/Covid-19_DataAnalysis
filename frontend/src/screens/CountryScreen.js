import React from "react";
import { motion } from "framer-motion";
import { routeAnimation } from "../animations";
import CountryFormComponent from "../components/CountryFormComponent";

const CountryScreen = () => {
	const mainStyle = { width: "100%", overflow: "hidden" };

	return (
		<motion.div
			style={mainStyle}
			className="mb-5"
			variants={routeAnimation}
			initial="hidden"
			animate="showing"
			exit="exit"
		>
			<CountryFormComponent isCountry />
		</motion.div>
	);
};

export default CountryScreen;
