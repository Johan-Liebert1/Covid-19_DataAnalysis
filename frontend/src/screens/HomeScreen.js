import React from "react";
import { motion } from "framer-motion";
import { routeAnimation } from "../animations";

const HomeScreen = () => {
	const imgStyle = {
		marginBottom: "1rem",
		border: "1px solid white",
		width: "100%",
		height: "53%",
	};

	const divStyles = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	};

	return (
		<motion.div variants={routeAnimation} initial="hidden" animate="showing" exit="exit">
			<div className="container" style={divStyles}>
				<img src="gifs/CasesGif.gif" alt="cases-gif" style={imgStyle} />
				<img src="gifs/DeathsGif.gif" alt="deaths-gif" style={imgStyle} />
			</div>
		</motion.div>
	);
};

export default HomeScreen;
