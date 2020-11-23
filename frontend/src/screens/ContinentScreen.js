import React from "react";
import CountryFormComponent from "../components/CountryFormComponent";
import { motion } from "framer-motion";
import { routeAnimation } from "../animations";

const ContinentScreen = () => {
	return (
		<motion.div
			className="mb-5"
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
