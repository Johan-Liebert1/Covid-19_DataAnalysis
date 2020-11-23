import React from "react";
import { motion } from "framer-motion";
import { routeAnimation } from "../animations";

const HomeScreen = () => {
	return (
		<motion.div variants={routeAnimation} initial="hidden" animate="showing" exit="exit">
			<p style={{ color: "white" }}>This is home</p>
			homehomehome
		</motion.div>
	);
};

export default HomeScreen;
