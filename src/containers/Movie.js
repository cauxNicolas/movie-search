import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// data
import axios from "axios";
// image inconnue
import notFound from "../assets/img/404.jpeg";

const Movie = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	const { id } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://www.omdbapi.com/?apikey=9ddde0b3&i=" + id
			);
			setData(response.data);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	console.log(data);
	return (
		<>
			{isLoading ? (
				<div>chargement en cours</div>
			) : (
				<div className="show-movie">
					<div className="show-movie-content">
						<div className="show-movie-img">
							<img
								src={
									data.Poster === "N/A"
										? notFound
										: data.Poster
								}
								alt={data.Title}
							/>
						</div>
						<div className="show-movie-info">
							<p className="movie-title">{data.Title}</p>
							<p className="movie-year">{data.Year}</p>
							{data.Plot === "N/A" ? null : (
								<p className="movie-plot">{data.Plot}</p>
							)}
							{data.Actors === "N/A" ? null : (
								<p className="movie-actor">{data.Actors}</p>
							)}
							{data.Runtime === "N/A" ? null : (
								<p className="movie-runtime">{data.Runtime}</p>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Movie;
