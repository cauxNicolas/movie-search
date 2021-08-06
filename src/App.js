import React, { useState, useEffect } from "react";
// data
import axios from "axios";
// css
import "./App.css";
// navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Containers
import Navigation from "./components/Navigation";
import Home from "./containers/Home";
import Movie from "./containers/Movie";

function App() {
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://www.omdbapi.com/?apikey=9ddde0b3&type=movie&s=[titre]"
			);
			setData(response.data.Search);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<>
			{isLoading ? (
				<div>chargement en cours</div>
			) : (
				<Router>
					<Navigation />
					<Switch>
						<Route path="/movie/:id">
							<Movie data={data} />
						</Route>
						<Route path="/">
							<Home data={data} />
						</Route>
					</Switch>
				</Router>
			)}
		</>
	);
}

export default App;
