import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/NavbarStyles.css";

const NavbarComponent = ({ location }) => {
	return (
		<nav>
			<Link to="/" className={`link ${location.pathname === "/" ? "active" : ""}`}>
				<p>Home</p>
			</Link>

			<Link
				to="/country"
				className={`link ${location.pathname === "/country" ? "active" : ""}`}
			>
				<p>Country Data</p>
			</Link>
			<Link
				to="/continent"
				className={`link ${location.pathname === "/continent" ? "active" : ""}`}
			>
				<p>Continent Data</p>
			</Link>
			<Link
				to="/global"
				className={`link ${location.pathname === "/global" ? "active" : ""}`}
			>
				<p>Global Data</p>
			</Link>
		</nav>
	);
};

export default withRouter(NavbarComponent);
