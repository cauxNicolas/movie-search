import React, { useState } from "react";
import MovieDetail from "../components/MovieDetail";
// icon
import SearchImg from "../assets/img/search.svg";

const Home = ({ data }) => {
	console.log(data);
	const [search, setSearch] = useState("");
	console.log(search);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div className="input">
				<img src={SearchImg} />
				<input
					placeholder="Rechercher un film"
					value={search}
					onChange={(event) => {
						setSearch(event.target.value);
					}}
				/>
			</div>

			<div className="liste-movies">
				{data.map((movie, index) => {
					// on recherche si une lettre existe dans le map
					if (
						movie.Title.toLowerCase().indexOf(
							search.toLowerCase()
						) !== -1
					) {
						return (
							<MovieDetail
								index={index}
								title={movie.Title}
								poster={movie.Poster}
								id={movie.imdbID}
								year={movie.Year}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Home;
