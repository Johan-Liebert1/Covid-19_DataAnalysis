import React from "react";
import GlobalFormComponent from "../components/GlobalFormComponent";
import { motion } from "framer-motion";
import { routeAnimation } from "../animations";
import "../styles/GlobalScreenStyles.css";

const GlobalScreen = () => {
	return (
		<motion.div
			className="mb-5"
			variants={routeAnimation}
			initial="hidden"
			animate="showing"
			exit="exit"
		>
			<GlobalFormComponent />
		</motion.div>
	);
};

export default GlobalScreen;
