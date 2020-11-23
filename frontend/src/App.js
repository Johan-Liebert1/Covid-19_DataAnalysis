import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import CountryScreen from "./screens/CountryScreen";
import GlobalScreen from "./screens/GlobalScreen";
import ContinentScreen from "./screens/ContinentScreen";
import HomeScreen from "./screens/HomeScreen";
import { AnimatePresence } from "framer-motion";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

function App() {
	const location = useLocation();
	return (
		<>
			<NavbarComponent />
			<AnimatePresence>
				<Switch location={location} key={location.key}>
					<Route exact path="/" render={() => <HomeScreen />} />

					<Route exact path="/country" render={() => <CountryScreen />} />

					<Route exact path="/global" render={() => <GlobalScreen />} />

					<Route exact path="/continent" render={() => <ContinentScreen />} />
				</Switch>
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default App;
