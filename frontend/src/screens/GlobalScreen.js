import React from "react";

import GlobalFormComponent from "../components/GlobalFormComponent";
import { motion } from "framer-motion";
import { routeAnimation } from "../animations";
import "../styles/GlobalScreenStyles.css";

const GlobalScreen = () => {
	const mainStyle = { width: "100%", overflow: "hidden", minHeight: "67vh" };

	return (
		<motion.div
			style={mainStyle}
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
