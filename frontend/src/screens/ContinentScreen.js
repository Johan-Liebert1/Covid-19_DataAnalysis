import React from "react";
import CountryFormComponent from "../components/CountryFormComponent";
import { motion } from "framer-motion";
import { routeAnimation } from "../animations";

const ContinentScreen = () => {
	const mainStyle = { width: "100%", overflow: "hidden", minHeight: "67vh" };
	return (
		<motion.div
			style={mainStyle}
			variants={routeAnimation}
			initial="hidden"
			animate="showing"
			exit="exit"
		>
			<CountryFormComponent isCountry={false} />
		</motion.div>
	);
};

export default ContinentScreen;
